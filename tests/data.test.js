import assert from "node:assert/strict";
import test from "node:test";
import {
  COLLEGE_PREP,
  COLLEGES,
  ECONOMICS_LESSONS,
  IIMB_MOCKS,
  IIMB_TOPIC_PRACTICE,
  INTERVIEW_QUESTIONS,
  PRESENTATION_TOPICS,
  SOURCES
} from "../data.js";

const domains = new Set([
  "quantitativeAptitude",
  "logicalReasoning",
  "verbalReadingComprehension",
  "dataInterpretation",
  "economicsApplications"
]);

test("the data layer has the requested complete practice inventory", () => {
  assert.equal(IIMB_MOCKS.tests.length, 3);
  assert.equal(IIMB_MOCKS.tests.reduce((sum, test) => sum + test.questions.length, 0), 60);
  assert.equal(IIMB_TOPIC_PRACTICE.length, 120);
  assert.equal(INTERVIEW_QUESTIONS.length, 45);
  assert.equal(PRESENTATION_TOPICS.length, 32);
  assert.equal(ECONOMICS_LESSONS.length, 10);
  assert.ok(ECONOMICS_LESSONS.every((lesson) => lesson.quiz.length === 5));
});

test("each mock question has a valid, internally consistent answer key", () => {
  const ids = new Set();
  for (const mock of IIMB_MOCKS.tests) {
    assert.equal(mock.questions.length, 20);
    for (const question of mock.questions) {
      assert.ok(!ids.has(question.id), `duplicate question id ${question.id}`);
      ids.add(question.id);
      assert.ok(domains.has(question.domain), question.domain);
      assert.ok(question.options.length >= 4);
      assert.ok(Number.isInteger(question.answerIndex));
      assert.ok(question.answerIndex >= 0 && question.answerIndex < question.options.length);
      assert.equal(question.answer, question.options[question.answerIndex]);
      assert.match(question.contentLabel, /AI-created practice question/);
      assert.ok(question.explanation.length > 15);
    }
  }
});

test("the topic bank has unique ids, valid answer keys and all five readiness domains", () => {
  const ids = new Set(IIMB_TOPIC_PRACTICE.map((question) => question.id));
  assert.equal(ids.size, IIMB_TOPIC_PRACTICE.length);
  assert.deepEqual(new Set(IIMB_TOPIC_PRACTICE.map((question) => question.domain)), domains);
  for (const question of IIMB_TOPIC_PRACTICE) {
    assert.ok(question.options.length >= 4);
    assert.equal(question.answer, question.options[question.answerIndex]);
    assert.match(question.contentLabel, /AI-created practice question/);
    assert.ok(question.explanation.length > 10);
  }
});

test("interview, presentation and lesson records contain the fields the UI needs", () => {
  for (const question of INTERVIEW_QUESTIONS) {
    assert.ok(question.question && question.tester && question.structure.length >= 3);
    assert.ok(question.illustrativeAnswer && question.mistakes.length >= 2 && question.followUp);
  }
  for (const topic of PRESENTATION_TOPICS) {
    assert.ok(topic.title && topic.simpleExplanation && topic.opening);
    assert.equal(topic.threePoints.length, 3);
    assert.ok(topic.conclusion && topic.followUps.length >= 1);
  }
  for (const lesson of ECONOMICS_LESSONS) {
    assert.ok(lesson.id && lesson.title && lesson.simpleExplanation && lesson.everydayExample && lesson.interactionPrompt);
    for (const quiz of lesson.quiz) assert.ok(quiz.question && quiz.answer && quiz.explanation);
  }
});

test("official sources and college routes are explicit and labelled", () => {
  assert.ok(SOURCES.records.length >= 6);
  assert.ok(SOURCES.records.every((source) => source.url.startsWith("https://")));
  assert.ok(SOURCES.records.every((source) => source.verifiedOn === SOURCES.verificationDate));
  assert.ok(COLLEGES.some((college) => college.programme.includes("not an Economics degree")) || COLLEGES.some((college) => college.programmeType.includes("not an Economics degree")));
  assert.ok(COLLEGES.some((college) => college.id === "cuet-ug"));
});

test("each non-IIMB route has a separate honest readiness module", () => {
  for (const collegeId of ["nm-bcom-economics", "st-xaviers-ba", "christ-bsc-economics", "cuet-ug"]) {
    const module = COLLEGE_PREP[collegeId];
    assert.ok(module, `missing route module ${collegeId}`);
    assert.ok(module.confirmed.length >= 2);
    assert.ok(module.verifyNext.length >= 2);
    assert.ok(module.dailyPlan.length >= 3);
    assert.ok(module.checklist.length >= 4);
    assert.equal(module.practiceQuestions.length, 6);
    for (const question of module.practiceQuestions) {
      assert.equal(question.answer, question.options[question.answerIndex]);
      assert.equal(question.whyWrong.length, question.options.length - 1);
      assert.match(question.contentLabel, /AI-created practice question/);
    }
  }
  assert.equal(COLLEGE_PREP["cuet-ug"].officialPatternStatus, "not-claimed");
});
