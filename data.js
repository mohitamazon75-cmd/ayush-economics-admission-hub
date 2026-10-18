/*
 * Ayush Economics Admission Prep Hub
 *
 * This file is intentionally dependency-free and safe to load from a browser
 * with a local <script type="module"> tag. Official claims are kept separate
 * from AI-created practice content so a dashboard can show provenance clearly.
 */

const VERIFIED_ON = "2026-10-18";

export const SOURCES = Object.freeze({
  verificationDate: VERIFIED_ON,
  provenancePolicy:
    "Official admissions facts below are transcribed or paraphrased from the linked institutional pages. Practice questions, model answers, and presentation prompts are AI-created study material and are not official questions or official selection guidance.",
  records: [
    {
      id: "iimb-dbe-admissions-2026",
      institution: "IIM Bangalore",
      title: "BBA in Digital Business and Entrepreneurship admissions",
      url: "https://dbe.iimb.ac.in/admissions/",
      verifiedOn: VERIFIED_ON,
      type: "official-admissions-page",
      officialScope:
        "This is IIM Bangalore's BBA in Digital Business and Entrepreneurship, an online three-year undergraduate business programme with certificate, diploma and degree exit points. It is not an undergraduate Economics degree.",
      verifiedFacts: [
        "The page confirms an IIMB entrance test pathway for the programme.",
        "For the 2026 cycle, the page lists 60% in Class 12 for General, NC-OBC and EWS candidates and 55% for SC, ST and PwD candidates, with the stated Class 10 mathematics requirement.",
        "For the 2026 cycle, the page lists IIMB Entrance Test cut-offs of 50% General, 45% NC-OBC/EWS and 40% SC/ST/PwD; CUET GAT and JEE Main pathways have separate percentile cut-offs.",
        "The page does not publish an official section-weight table for the entrance test."
      ],
      useInDashboard:
        "Use this record for IIMB pathway, eligibility and cut-off cards. Do not label the programme as Economics or treat the readiness mix below as an IIMB blueprint."
    },
    {
      id: "iimb-sample-paper-1",
      institution: "IIM Bangalore",
      title: "Official DBE Entrance Test sample question paper 1",
      url: "https://dbe.iimb.ac.in/wp-content/uploads/2026/03/DBE-Entrance-Test-2024-10th-Aug-2024-QP-PDF.pdf",
      verifiedOn: VERIFIED_ON,
      type: "official-sample-paper",
      officialScope:
        "Official sample question paper link published from the IIMB DBE admissions page; it is not presented here as a past-paper claim."
    },
    {
      id: "iimb-sample-paper-2",
      institution: "IIM Bangalore",
      title: "Official DBE Entrance Test sample question paper 2",
      url: "https://dbe.iimb.ac.in/wp-content/uploads/2026/03/DBE-Entrance-Test-2024-17th-Aug-2024-QP-PDF.pdf",
      verifiedOn: VERIFIED_ON,
      type: "official-sample-paper",
      officialScope:
        "Official sample question paper link published from the IIMB DBE admissions page; it is not presented here as a past-paper claim."
    },
    {
      id: "iimb-admission-process-2026",
      institution: "IIM Bangalore",
      title: "BBA DBE admission process document 2026-29",
      url: "https://dbe.iimb.ac.in/admission-process-document-2026-29/",
      verifiedOn: VERIFIED_ON,
      type: "official-process-document",
      officialScope: "Use the live document for cycle-specific process details."
    },
    {
      id: "nm-undergraduate-admissions",
      institution: "Narsee Monjee College of Commerce & Economics",
      title: "Under Graduate Admissions",
      url: "https://nmcollege.in/admissions/under-graduate",
      verifiedOn: VERIFIED_ON,
      type: "official-undergraduate-admissions-page",
      officialScope:
        "The official undergraduate admissions page lists B.Com (Economics) and B.Com (Economics & Analytics) among the programmes and uses merit-by-Class-XII language. Treat any displayed merit list or cut-off as cycle-specific and verify the live notice before relying on it."
    },
    {
      id: "st-xaviers-ba-admissions",
      institution: "St. Xavier's College, Mumbai",
      title: "Bachelor of Arts admissions page",
      url: "https://xaviers.edu/admissions/degree/under-graduate/ba/",
      verifiedOn: VERIFIED_ON,
      type: "official-undergraduate-admissions-page",
      officialScope:
        "Official BA page with the published seat, category and fee information for the displayed admission cycle."
    },
    {
      id: "christ-bsc-economics",
      institution: "CHRIST (Deemed to be University)",
      title: "BSc (Economics/Honours/Honours with Research) course page",
      url: "https://christuniversity.in/courses/ODg0",
      verifiedOn: VERIFIED_ON,
      type: "official-course-page",
      officialScope:
        "Official CHRIST course-page URL for BSc Economics and its displayed Honours/Honours with Research pathways. Programme structure, campus, eligibility and selection details can change, so confirm the current admission cycle on the live page."
    },
    {
      id: "cuet-official-home",
      institution: "National Testing Agency",
      title: "CUET (UG) official home",
      url: "https://cuet.nta.nic.in/",
      verifiedOn: VERIFIED_ON,
      type: "official-exam-home",
      officialScope:
        "Current-bulletin placeholder: use the live CUET (UG) official home to verify the current year bulletin, dates, subjects and participating-university rules before applying."
    }
  ]
});

export const COLLEGES = Object.freeze([
  {
    id: "iimb-bba-dbe",
    name: "IIM Bangalore",
    programme: "BBA in Digital Business and Entrepreneurship",
    programmeType: "business undergraduate; not an Economics degree",
    admissionsSourceId: "iimb-dbe-admissions-2026",
    entranceRoutes: ["IIMB Entrance Test", "CUET (UG) General Test", "JEE Main"],
    2026: {
      eligibility: {
        nationality: "Indian nationals",
        class10: "Pass certificate from a recognised Class 10 board with Mathematics as a compulsory subject",
        class12GeneralNcObcEws: "60% marks or equivalent CGPA",
        class12ScStPwD: "55% marks or equivalent CGPA"
      },
      cutoffs: {
        iimbEntranceTest: { general: "50%", ncObcEws: "45%", scStPwD: "40%" },
        cuetGeneralTest: { general: "70th percentile", ncObcEws: "65th percentile", scStPwD: "60th percentile" },
        jeeMain: { general: "50th percentile", ncObcEws: "45th percentile", scStPwD: "40th percentile" }
      }
    }
  },
  {
    id: "nm-bcom-economics",
    name: "Narsee Monjee College of Commerce & Economics",
    programme: "B.Com (Economics)",
    programmeType: "commerce undergraduate",
    admissionsSourceId: "nm-undergraduate-admissions",
    selectionNote: "Official page uses merit-by-Class-XII language; confirm the current merit notice."
  },
  {
    id: "nm-bcom-economics-analytics",
    name: "Narsee Monjee College of Commerce & Economics",
    programme: "B.Com (Economics & Analytics)",
    programmeType: "commerce undergraduate",
    admissionsSourceId: "nm-undergraduate-admissions",
    selectionNote: "Official page uses merit-by-Class-XII language; confirm the current merit notice."
  },
  {
    id: "st-xaviers-ba",
    name: "St. Xavier's College, Mumbai",
    programme: "Bachelor of Arts",
    programmeType: "arts undergraduate",
    admissionsSourceId: "st-xaviers-ba-admissions"
  },
  {
    id: "christ-bsc-economics",
    name: "CHRIST (Deemed to be University)",
    programme: "BSc Economics",
    programmeType: "economics undergraduate",
    admissionsSourceId: "christ-bsc-economics",
    selectionNote: "Read the live course and admission pages for the current campus and selection process."
  },
  {
    id: "cuet-ug",
    name: "CUET (UG)",
    programme: "Common University Entrance Test (Undergraduate)",
    programmeType: "national entrance route",
    admissionsSourceId: "cuet-official-home",
    selectionNote: "Current bulletin is intentionally not hard-coded here."
  }
]);

const makeMcq = ({
  id,
  domain,
  prompt,
  options,
  answerIndex,
  explanation,
  alternativeExplanations,
  difficulty = "medium",
  tags = []
}) => ({
  id,
  domain,
  prompt,
  options,
  answerIndex,
  answer: options[answerIndex],
  explanation,
  alternativeExplanations,
  difficulty,
  tags
});

const PRACTICE_LABEL =
  "AI-created practice question. It is original readiness material, not an authentic IIMB past question or an official IIMB sample question.";

const mockQuestion = (question) => ({ ...question, contentLabel: PRACTICE_LABEL });

const IIMB_MOCK_TEST_1 = {
  id: "iimb-mock-01",
  title: "Mock 1: Balanced Core Sprint",
  style: "balanced mixed practice",
  questionCount: 20,
  suggestedMinutes: 35,
  weightModel: {
    quantitativeAptitude: 0.25,
    logicalReasoning: 0.2,
    verbalReadingComprehension: 0.2,
    dataInterpretation: 0.2,
    economicsApplications: 0.15
  },
  questions: [
    mockQuestion(makeMcq({ id: "m1-q01", domain: "quantitativeAptitude", prompt: "A price rises by 20% and then falls by 20%. What is the net change from the original price?", options: ["No change", "4% decrease", "4% increase", "8% decrease"], answerIndex: 1, explanation: "Using 100 as the base gives 120 and then 96, a 4% fall.", alternativeExplanations: ["Successive percentage changes multiply: 1.2 × 0.8 = 0.96."], difficulty: "easy", tags: ["percentages", "arithmetic"] })),
    mockQuestion(makeMcq({ id: "m1-q02", domain: "quantitativeAptitude", prompt: "If 3x + 5 = 26, what is x?", options: ["5", "6", "7", "8"], answerIndex: 2, explanation: "Subtract 5 to get 3x = 21, then divide by 3.", alternativeExplanations: ["Check: 3 × 7 + 5 = 26."], difficulty: "easy", tags: ["linear-equations"] })),
    mockQuestion(makeMcq({ id: "m1-q03", domain: "logicalReasoning", prompt: "All analysts are readers. Some readers are musicians. Which conclusion must be true?", options: ["Some analysts are musicians", "All musicians are analysts", "All analysts are readers", "No readers are musicians"], answerIndex: 2, explanation: "The first statement directly guarantees that every analyst is a reader; the overlap with musicians is not guaranteed.", alternativeExplanations: ["A valid conclusion must follow from every allowed arrangement, not just one possible overlap."], difficulty: "easy", tags: ["syllogism", "sets"] })),
    mockQuestion(makeMcq({ id: "m1-q04", domain: "logicalReasoning", prompt: "Riya is taller than Kabir. Kabir is taller than Meera. Who is shortest?", options: ["Riya", "Kabir", "Meera", "Cannot be determined"], answerIndex: 2, explanation: "The ordering is Riya > Kabir > Meera.", alternativeExplanations: ["Transitivity of greater-than gives Riya above Meera, leaving Meera at the bottom."], difficulty: "easy", tags: ["ordering"] })),
    mockQuestion(makeMcq({ id: "m1-q05", domain: "verbalReadingComprehension", prompt: "Choose the clearest revision: 'The policy was effective because it reduced waste and it also saved money.'", options: ["The policy was effective: reducing waste and saving money.", "The policy was effective because it reduced waste and saved money.", "The policy, it was effective because waste reduced and money saved.", "Because waste and money, the policy was effective."], answerIndex: 1, explanation: "The coordinated verbs 'reduced' and 'saved' are parallel and concise.", alternativeExplanations: ["Removing the repeated subject and the unnecessary second 'it' improves flow without changing meaning."], difficulty: "easy", tags: ["grammar", "parallelism"] })),
    mockQuestion(makeMcq({ id: "m1-q06", domain: "verbalReadingComprehension", prompt: "Passage: 'A subsidy can lower the price paid by consumers, but its final effect depends on how responsive buyers and sellers are.' What is the main idea?", options: ["Subsidies always benefit consumers equally", "Price effects depend partly on elasticities", "Sellers never benefit from subsidies", "Subsidies eliminate scarcity"], answerIndex: 1, explanation: "The passage links the final incidence of a subsidy to the responsiveness of demand and supply.", alternativeExplanations: ["The word 'depends' signals a conditional claim, not an absolute result."], difficulty: "medium", tags: ["rc", "elasticity"] })),
    mockQuestion(makeMcq({ id: "m1-q07", domain: "dataInterpretation", prompt: "A club records 40, 50 and 60 participants in three weeks. What is the average?", options: ["45", "50", "55", "60"], answerIndex: 1, explanation: "(40 + 50 + 60) / 3 = 150 / 3 = 50.", alternativeExplanations: ["The middle value is also 50 because the three observations are equally spaced."], difficulty: "easy", tags: ["averages", "tables"] })),
    mockQuestion(makeMcq({ id: "m1-q08", domain: "dataInterpretation", prompt: "A survey has 120 responses. If 35% prefer option A, how many respondents is that?", options: ["32", "36", "42", "48"], answerIndex: 2, explanation: "35% of 120 = 0.35 × 120 = 42.", alternativeExplanations: ["Thirty percent is 36 and five percent is 6, so together they make 42."], difficulty: "easy", tags: ["percentages", "survey"] })),
    mockQuestion(makeMcq({ id: "m1-q09", domain: "economicsApplications", prompt: "If demand is price elastic, a small price increase is most likely to cause:", options: ["A proportionally larger fall in quantity demanded", "No change in quantity demanded", "A proportionally smaller fall in quantity demanded", "A rise in quantity demanded"], answerIndex: 0, explanation: "Elastic demand means the percentage change in quantity exceeds the percentage change in price.", alternativeExplanations: ["Elasticity measures responsiveness, so quantity reacts more than proportionately."], difficulty: "medium", tags: ["elasticity", "microeconomics"] })),
    mockQuestion(makeMcq({ id: "m1-q10", domain: "economicsApplications", prompt: "The opportunity cost of spending an evening practising keyboard instead of working a paid shift is best described as:", options: ["The keyboard's purchase price", "The wage forgone from the shift", "The electricity used by the keyboard", "The enjoyment of practice"], answerIndex: 1, explanation: "Opportunity cost is the value of the next-best alternative forgone.", alternativeExplanations: ["The relevant sacrifice is the paid shift Ayush did not take, not every cost of practice."], difficulty: "easy", tags: ["opportunity-cost", "decision-making"] })),
    mockQuestion(makeMcq({ id: "m1-q11", domain: "quantitativeAptitude", prompt: "The ratio of red to blue files is 2:3. If there are 25 files, how many are blue?", options: ["10", "12", "15", "18"], answerIndex: 2, explanation: "Five ratio parts represent 25, so each part is 5 and blue has 3 × 5 = 15.", alternativeExplanations: ["Blue's share is 3/5 of the total: 3/5 × 25 = 15."], difficulty: "easy", tags: ["ratios"] })),
    mockQuestion(makeMcq({ id: "m1-q12", domain: "quantitativeAptitude", prompt: "A train travels 150 km in 3 hours. Its average speed is:", options: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"], answerIndex: 2, explanation: "Average speed = distance / time = 150 / 3 = 50 km/h.", alternativeExplanations: ["Three equal hours cover 50 km each."], difficulty: "easy", tags: ["speed-time-distance"] })),
    mockQuestion(makeMcq({ id: "m1-q13", domain: "logicalReasoning", prompt: "If the code for MARKET shifts each letter one place forward, what is the code for B?", options: ["A", "C", "D", "Z"], answerIndex: 1, explanation: "The next letter after B is C. The question tests the rule rather than the word.", alternativeExplanations: ["A forward one-place shift maps B to C."], difficulty: "easy", tags: ["coding-decoding"] })),
    mockQuestion(makeMcq({ id: "m1-q14", domain: "logicalReasoning", prompt: "Five people sit in a row. Neha is left of Omar and right of Pia. Which order is possible?", options: ["Neha, Pia, Omar", "Pia, Neha, Omar", "Omar, Neha, Pia", "Pia, Omar, Neha"], answerIndex: 1, explanation: "Pia < Neha < Omar satisfies both conditions.", alternativeExplanations: ["Neha must be between Pia and Omar in the left-to-right order."], difficulty: "medium", tags: ["arrangements"] })),
    mockQuestion(makeMcq({ id: "m1-q15", domain: "verbalReadingComprehension", prompt: "In the sentence 'The proposal was modest but practical', 'but' signals:", options: ["Cause", "Contrast", "Sequence", "Example"], answerIndex: 1, explanation: "'But' contrasts modest with practical.", alternativeExplanations: ["The two adjectives are placed in tension, so the connector is adversative."], difficulty: "easy", tags: ["connectors", "vocabulary"] })),
    mockQuestion(makeMcq({ id: "m1-q16", domain: "verbalReadingComprehension", prompt: "Passage: 'Measuring only attendance may miss whether learners understood the lesson.' Which assumption supports the claim?", options: ["Attendance and understanding are always identical", "Understanding is a different outcome from attendance", "No learner attends voluntarily", "Lessons have no learning goals"], answerIndex: 1, explanation: "The contrast works only if being present and understanding are distinct outcomes.", alternativeExplanations: ["The statement challenges attendance as a complete proxy, which requires the outcomes to differ conceptually."], difficulty: "medium", tags: ["assumptions", "rc"] })),
    mockQuestion(makeMcq({ id: "m1-q17", domain: "dataInterpretation", prompt: "A shop's monthly sales rise from ₹80,000 to ₹92,000. The percentage increase is:", options: ["12%", "15%", "18%", "20%"], answerIndex: 1, explanation: "The increase is ₹12,000; 12,000 / 80,000 × 100 = 15%.", alternativeExplanations: ["The new figure is 1.15 times the old figure."], difficulty: "medium", tags: ["growth", "percentages"] })),
    mockQuestion(makeMcq({ id: "m1-q18", domain: "dataInterpretation", prompt: "A pie chart gives 90° to transport. What fraction of the total is transport?", options: ["1/2", "1/3", "1/4", "1/8"], answerIndex: 2, explanation: "90° / 360° = 1/4.", alternativeExplanations: ["A quarter-turn represents one quarter of a full circle."], difficulty: "easy", tags: ["charts", "fractions"] })),
    mockQuestion(makeMcq({ id: "m1-q19", domain: "economicsApplications", prompt: "When a government sets a binding price ceiling below equilibrium rent, the most likely result is:", options: ["A surplus of housing", "A shortage of housing", "No change in quantity supplied", "An automatic increase in quality"], answerIndex: 1, explanation: "At the lower legal price, quantity demanded exceeds quantity supplied.", alternativeExplanations: ["The ceiling attracts more buyers while discouraging some sellers, creating excess demand."], difficulty: "medium", tags: ["price-controls", "microeconomics"] })),
    mockQuestion(makeMcq({ id: "m1-q20", domain: "economicsApplications", prompt: "Real GDP differs from nominal GDP because real GDP:", options: ["Uses current prices only", "Adjusts for price changes", "Excludes all services", "Counts only exports"], answerIndex: 1, explanation: "Real GDP values output using base-year or constant prices to separate quantity changes from price changes.", alternativeExplanations: ["The word 'real' signals a price-adjusted measure of production."], difficulty: "medium", tags: ["macroeconomics", "gdp"] }))
  ]
};

const IIMB_MOCK_TEST_2 = {
  id: "iimb-mock-02",
  title: "Mock 2: Reasoning and Reading Lens",
  style: "logic-and-language forward mixed practice",
  questionCount: 20,
  suggestedMinutes: 38,
  weightModel: {
    quantitativeAptitude: 0.2,
    logicalReasoning: 0.3,
    verbalReadingComprehension: 0.25,
    dataInterpretation: 0.1,
    economicsApplications: 0.15
  },
  questions: [
    mockQuestion(makeMcq({ id: "m2-q01", domain: "logicalReasoning", prompt: "If every violin is an instrument and no instrument is disposable, which statement follows?", options: ["No violin is disposable", "Some violins are disposable", "Every disposable object is a violin", "No instrument exists"], answerIndex: 0, explanation: "Violin ⊂ instrument and instrument ∩ disposable is empty, so violin and disposable cannot overlap.", alternativeExplanations: ["A subset of a set disjoint from disposable is also disjoint from disposable."], difficulty: "medium", tags: ["syllogism", "sets"] })),
    mockQuestion(makeMcq({ id: "m2-q02", domain: "logicalReasoning", prompt: "Find the next number: 3, 6, 12, 24, __", options: ["30", "36", "48", "60"], answerIndex: 2, explanation: "Each term doubles, so 24 × 2 = 48.", alternativeExplanations: ["The common ratio is 2."], difficulty: "easy", tags: ["series"] })),
    mockQuestion(makeMcq({ id: "m2-q03", domain: "logicalReasoning", prompt: "A is the sister of B. B is the father of C. A is C's:", options: ["Mother", "Aunt", "Cousin", "Grandmother"], answerIndex: 1, explanation: "A is the father's sister, so she is C's aunt.", alternativeExplanations: ["The relationship is one generation above C and collateral to C's parent."], difficulty: "easy", tags: ["blood-relations"] })),
    mockQuestion(makeMcq({ id: "m2-q04", domain: "logicalReasoning", prompt: "A meeting is on the day after Tuesday and before Thursday. Which day is it?", options: ["Monday", "Tuesday", "Wednesday", "Friday"], answerIndex: 2, explanation: "The only day after Tuesday and before Thursday is Wednesday.", alternativeExplanations: ["The sequence is Tuesday, Wednesday, Thursday."], difficulty: "easy", tags: ["calendar"] })),
    mockQuestion(makeMcq({ id: "m2-q05", domain: "verbalReadingComprehension", prompt: "Choose the word closest in meaning to 'prudent'.", options: ["Careless", "Cautious", "Noisy", "Immediate"], answerIndex: 1, explanation: "Prudent means careful and sensible about consequences.", alternativeExplanations: ["A prudent choice weighs risk before acting."], difficulty: "easy", tags: ["vocabulary"] })),
    mockQuestion(makeMcq({ id: "m2-q06", domain: "verbalReadingComprehension", prompt: "Passage: 'A dashboard can make data visible, but visibility alone does not guarantee a wise decision.' Which inference is strongest?", options: ["Dashboards are useless", "Good decisions require interpretation as well as data display", "Data should never be displayed", "Wise decisions are random"], answerIndex: 1, explanation: "The passage distinguishes showing information from interpreting and using it.", alternativeExplanations: ["'But' limits the claim that visibility alone is sufficient; it does not reject dashboards."], difficulty: "medium", tags: ["inference", "rc"] })),
    mockQuestion(makeMcq({ id: "m2-q07", domain: "verbalReadingComprehension", prompt: "Identify the sentence with correct subject-verb agreement.", options: ["The list of topics are long.", "The list of topics is long.", "The lists of topic is long.", "The list topics are long."], answerIndex: 1, explanation: "The head noun 'list' is singular, so the verb is 'is'.", alternativeExplanations: ["The intervening phrase 'of topics' does not change the number of the subject."], difficulty: "easy", tags: ["grammar", "agreement"] })),
    mockQuestion(makeMcq({ id: "m2-q08", domain: "verbalReadingComprehension", prompt: "A paragraph first describes a problem, then gives two remedies. Its structure is best called:", options: ["Problem-solution", "Chronological biography", "Definition only", "Comparison without a decision"], answerIndex: 0, explanation: "The paragraph moves from issue to proposed remedies.", alternativeExplanations: ["The remedies function as responses to the initial problem."], difficulty: "easy", tags: ["reading-structure"] })),
    mockQuestion(makeMcq({ id: "m2-q09", domain: "quantitativeAptitude", prompt: "What is 15% of 240?", options: ["24", "30", "36", "42"], answerIndex: 2, explanation: "10% is 24 and 5% is 12, totalling 36.", alternativeExplanations: ["0.15 × 240 = 36."], difficulty: "easy", tags: ["percentages"] })),
    mockQuestion(makeMcq({ id: "m2-q10", domain: "quantitativeAptitude", prompt: "The simple interest on ₹2,000 at 5% per year for 2 years is:", options: ["₹100", "₹150", "₹200", "₹250"], answerIndex: 2, explanation: "SI = PRT/100 = 2,000 × 5 × 2 / 100 = ₹200.", alternativeExplanations: ["Each year earns ₹100 on the original principal, for two years."], difficulty: "medium", tags: ["simple-interest"] })),
    mockQuestion(makeMcq({ id: "m2-q11", domain: "quantitativeAptitude", prompt: "A number is divided by 4 and the quotient is 9. What is the number?", options: ["13", "27", "36", "45"], answerIndex: 2, explanation: "The number is 4 × 9 = 36.", alternativeExplanations: ["Division and multiplication are inverse operations."], difficulty: "easy", tags: ["arithmetic"] })),
    mockQuestion(makeMcq({ id: "m2-q12", domain: "quantitativeAptitude", prompt: "If a:b = 4:5 and b:c = 10:3, then a:c is:", options: ["4:3", "8:3", "3:8", "5:3"], answerIndex: 1, explanation: "Scale 4:5 to 8:10, then compare with 10:3, giving a:c = 8:3.", alternativeExplanations: ["Make the common b equal to 10 before reading a and c."], difficulty: "hard", tags: ["ratios", "proportion"] })),
    mockQuestion(makeMcq({ id: "m2-q13", domain: "dataInterpretation", prompt: "A table shows 18, 24 and 30 registrations. What is the range?", options: ["6", "12", "18", "24"], answerIndex: 1, explanation: "Range = maximum − minimum = 30 − 18 = 12.", alternativeExplanations: ["The range measures spread between the two endpoints."], difficulty: "easy", tags: ["statistics", "tables"] })),
    mockQuestion(makeMcq({ id: "m2-q14", domain: "dataInterpretation", prompt: "A dataset has five values with mean 12. What is their total?", options: ["17", "60", "72", "120"], answerIndex: 1, explanation: "Total = mean × number of values = 12 × 5 = 60.", alternativeExplanations: ["Mean is total divided by count, so reverse the operation by multiplying."], difficulty: "easy", tags: ["averages"] })),
    mockQuestion(makeMcq({ id: "m2-q15", domain: "economicsApplications", prompt: "A positive externality from vaccination means:", options: ["The private benefit exceeds the social benefit", "Others receive benefits not fully reflected in the buyer's decision", "Vaccination always has zero cost", "The government bans vaccination"], answerIndex: 1, explanation: "A positive externality is a benefit to third parties beyond the decision-maker's private benefit.", alternativeExplanations: ["Social benefit includes spillovers to people who did not make the purchase."], difficulty: "medium", tags: ["externalities", "public-policy"] })),
    mockQuestion(makeMcq({ id: "m2-q16", domain: "economicsApplications", prompt: "A binding minimum wage above equilibrium is expected to create:", options: ["Excess demand for labour", "A labour surplus", "No effect on labour markets", "A fall in the legal wage"], answerIndex: 1, explanation: "At the higher wage, more people want jobs while fewer firms hire, creating excess supply of labour.", alternativeExplanations: ["A labour surplus is unemployment in the simple competitive model."], difficulty: "medium", tags: ["price-controls", "labour"] })),
    mockQuestion(makeMcq({ id: "m2-q17", domain: "economicsApplications", prompt: "Inflation is best described as:", options: ["A sustained rise in the general price level", "A fall in one product's price", "An increase in real output only", "A rise in one person's income"], answerIndex: 0, explanation: "Inflation concerns the broad price level over time, not a single price.", alternativeExplanations: ["The key words are 'general' and 'sustained'."], difficulty: "easy", tags: ["macroeconomics", "inflation"] })),
    mockQuestion(makeMcq({ id: "m2-q18", domain: "economicsApplications", prompt: "If a bank raises its lending rate, the immediate incentive for a household is usually to:", options: ["Borrow more", "Borrow less or postpone borrowing", "Ignore all costs", "Turn loans into grants"], answerIndex: 1, explanation: "A higher interest rate raises the cost of borrowing, reducing the incentive to take a loan.", alternativeExplanations: ["The price of credit has increased."], difficulty: "easy", tags: ["interest-rates", "finance"] })),
    mockQuestion(makeMcq({ id: "m2-q19", domain: "logicalReasoning", prompt: "If the statement 'Some athletes are musicians' is true, which statement is also possible?", options: ["No athlete is a musician", "All athletes are musicians", "No musician exists", "Every person is an athlete"], answerIndex: 1, explanation: "Some overlap is compatible with all athletes being musicians; it is not compatible with no overlap.", alternativeExplanations: ["'Some' asserts at least one overlap but does not limit the size of the overlap."], difficulty: "medium", tags: ["sets", "possibility"] })),
    mockQuestion(makeMcq({ id: "m2-q20", domain: "verbalReadingComprehension", prompt: "Which evidence would most directly test the claim that a study app improves retention?", options: ["The app's logo colour", "A comparison of retention with and without the app", "The founder's favourite subject", "The length of the app's name"], answerIndex: 1, explanation: "A comparison that changes app use while measuring retention directly tests the claim.", alternativeExplanations: ["The relevant outcome is retention, and a counterfactual comparison helps isolate the app's effect."], difficulty: "hard", tags: ["evidence", "critical-reasoning"] }))
  ]
};

const IIMB_MOCK_TEST_3 = {
  id: "iimb-mock-03",
  title: "Mock 3: Applied Data and Economics",
  style: "application-first mixed practice",
  questionCount: 20,
  suggestedMinutes: 40,
  weightModel: {
    quantitativeAptitude: 0.2,
    logicalReasoning: 0.15,
    verbalReadingComprehension: 0.15,
    dataInterpretation: 0.3,
    economicsApplications: 0.2
  },
  questions: [
    mockQuestion(makeMcq({ id: "m3-q01", domain: "dataInterpretation", prompt: "A fitness group has 80 members. Women are 45% of the group. How many members are men?", options: ["36", "44", "45", "55"], answerIndex: 1, explanation: "Men are 55% of 80, so 0.55 × 80 = 44.", alternativeExplanations: ["Subtract 36 women from 80 total members."], difficulty: "easy", tags: ["percentages", "data"] })),
    mockQuestion(makeMcq({ id: "m3-q02", domain: "dataInterpretation", prompt: "A project budget is ₹1,20,000. Design uses 30% and research uses 25%. What amount remains?", options: ["₹42,000", "₹54,000", "₹60,000", "₹66,000"], answerIndex: 1, explanation: "Used = 55%, so remaining = 45% of ₹1,20,000 = ₹54,000.", alternativeExplanations: ["0.45 × 120,000 = 54,000."], difficulty: "medium", tags: ["budgets", "percentages"] })),
    mockQuestion(makeMcq({ id: "m3-q03", domain: "dataInterpretation", prompt: "A line chart records visitors: Monday 20, Tuesday 30, Wednesday 25, Thursday 35. Which day has the highest count?", options: ["Monday", "Tuesday", "Wednesday", "Thursday"], answerIndex: 3, explanation: "Thursday's 35 is the largest value.", alternativeExplanations: ["Compare the four plotted values directly; 35 exceeds 30, 25 and 20."], difficulty: "easy", tags: ["charts", "comparison"] })),
    mockQuestion(makeMcq({ id: "m3-q04", domain: "dataInterpretation", prompt: "The median of 5, 9, 12, 15 and 20 is:", options: ["9", "12", "15", "20"], answerIndex: 1, explanation: "The ordered list has five values, so the middle third value is 12.", alternativeExplanations: ["Median is the central observation after sorting."], difficulty: "easy", tags: ["statistics", "median"] })),
    mockQuestion(makeMcq({ id: "m3-q05", domain: "dataInterpretation", prompt: "A product's sales rise from 200 units to 260 units. The increase is:", options: ["20%", "25%", "30%", "60%"], answerIndex: 2, explanation: "Increase is 60; 60/200 × 100 = 30%.", alternativeExplanations: ["260 is 1.3 times 200, so the growth is 30%."], difficulty: "easy", tags: ["growth", "sales"] })),
    mockQuestion(makeMcq({ id: "m3-q06", domain: "quantitativeAptitude", prompt: "The area of a rectangle with length 12 cm and breadth 5 cm is:", options: ["17 cm²", "34 cm²", "60 cm²", "120 cm²"], answerIndex: 2, explanation: "Area = length × breadth = 12 × 5 = 60 cm².", alternativeExplanations: ["Five rows of twelve squares give 60 square units."], difficulty: "easy", tags: ["geometry", "area"] })),
    mockQuestion(makeMcq({ id: "m3-q07", domain: "quantitativeAptitude", prompt: "If x² = 49 and x is positive, x equals:", options: ["−7", "0", "7", "49"], answerIndex: 2, explanation: "The positive square root of 49 is 7.", alternativeExplanations: ["Both 7 and −7 square to 49, but the condition selects 7."], difficulty: "easy", tags: ["algebra", "roots"] })),
    mockQuestion(makeMcq({ id: "m3-q08", domain: "quantitativeAptitude", prompt: "A ₹500 item is discounted by 10%. Its sale price is:", options: ["₹440", "₹450", "₹490", "₹550"], answerIndex: 1, explanation: "A 10% discount is ₹50, leaving ₹450.", alternativeExplanations: ["90% of ₹500 is ₹450."], difficulty: "easy", tags: ["discount", "percentages"] })),
    mockQuestion(makeMcq({ id: "m3-q09", domain: "logicalReasoning", prompt: "Four tasks P, Q, R and S are scheduled. P must occur before Q and R must occur after S. Which order is valid?", options: ["Q, P, S, R", "P, Q, R, S", "S, P, Q, R", "R, S, P, Q"], answerIndex: 2, explanation: "S before R and P before Q hold in S, P, Q, R.", alternativeExplanations: ["Check both precedence constraints rather than requiring a single fixed order."], difficulty: "medium", tags: ["ordering", "constraints"] })),
    mockQuestion(makeMcq({ id: "m3-q10", domain: "logicalReasoning", prompt: "A clock shows 3:00. The angle between the hands is:", options: ["0°", "45°", "90°", "180°"], answerIndex: 2, explanation: "At 3:00 the hands point to 3 and 12, a right angle.", alternativeExplanations: ["Each hour mark is 30°, and three hour marks separate 12 and 3."], difficulty: "easy", tags: ["clock", "angles"] })),
    mockQuestion(makeMcq({ id: "m3-q11", domain: "verbalReadingComprehension", prompt: "In an argument, the conclusion is the statement that:", options: ["Provides background only", "The reasons are intended to support", "Defines every word", "Always appears first"], answerIndex: 1, explanation: "Premises or reasons are offered to support a conclusion.", alternativeExplanations: ["Find the claim the writer wants the reader to accept as the result."], difficulty: "medium", tags: ["argument", "critical-reasoning"] })),
    mockQuestion(makeMcq({ id: "m3-q12", domain: "verbalReadingComprehension", prompt: "Choose the best transition: 'The sample was small; __, the result is useful as an initial clue.'", options: ["therefore", "however", "similarly", "for example"], answerIndex: 1, explanation: "The second clause qualifies the limitation with a contrasting use, so 'however' fits.", alternativeExplanations: ["A small sample is a weakness, but it can still provide an initial clue."], difficulty: "medium", tags: ["connectors", "writing"] })),
    mockQuestion(makeMcq({ id: "m3-q13", domain: "economicsApplications", prompt: "A student compares two gyms but chooses the one with a slightly higher fee because it is closer. This illustrates that:", options: ["Price is the only determinant of demand", "Non-price factors can affect choice", "Distance has no value", "Demand never changes"], answerIndex: 1, explanation: "Convenience is a non-price factor that changes the relative attractiveness of alternatives.", alternativeExplanations: ["Consumer choice considers total perceived benefit and cost, not the posted price alone."], difficulty: "easy", tags: ["consumer-choice", "demand"] })),
    mockQuestion(makeMcq({ id: "m3-q14", domain: "economicsApplications", prompt: "If a person's income rises and they buy more of a normal good, the good's demand has:", options: ["Increased", "Decreased", "Become perfectly inelastic", "Become zero"], answerIndex: 0, explanation: "More quantity demanded at each price due to higher income is a rightward demand shift for a normal good.", alternativeExplanations: ["The change is caused by income, so it is not just movement along the same demand curve."], difficulty: "medium", tags: ["demand", "income"] })),
    mockQuestion(makeMcq({ id: "m3-q15", domain: "economicsApplications", prompt: "A public good is typically non-rival and non-excludable. Which is the best example?", options: ["A private sandwich", "A streetlight's illumination", "A paid concert seat", "A single-use coupon"], answerIndex: 1, explanation: "One person's use of streetlight illumination does not substantially reduce another's use, and exclusion is difficult.", alternativeExplanations: ["Public-good features concern shared use and difficulty of restricting access."], difficulty: "medium", tags: ["public-goods", "microeconomics"] })),
    mockQuestion(makeMcq({ id: "m3-q16", domain: "economicsApplications", prompt: "A country's exports exceed its imports in a year. Its trade balance is:", options: ["In deficit", "In surplus", "Exactly zero", "Impossible to measure"], answerIndex: 1, explanation: "Exports minus imports is positive, which is a trade surplus.", alternativeExplanations: ["A surplus is the positive difference between export receipts and import spending."], difficulty: "easy", tags: ["international-trade", "macroeconomics"] })),
    mockQuestion(makeMcq({ id: "m3-q17", domain: "dataInterpretation", prompt: "A dataset has values 2, 4, 4, 7 and 9. Its mode is:", options: ["2", "4", "7", "9"], answerIndex: 1, explanation: "Four appears twice; every other value appears once.", alternativeExplanations: ["Mode is the most frequent observation, not the middle or largest one."], difficulty: "easy", tags: ["statistics", "mode"] })),
    mockQuestion(makeMcq({ id: "m3-q18", domain: "dataInterpretation", prompt: "A company allocates ₹90,000 in the ratio 2:1 between training and equipment. Training receives:", options: ["₹30,000", "₹45,000", "₹60,000", "₹75,000"], answerIndex: 2, explanation: "Two of three parts go to training: 2/3 × ₹90,000 = ₹60,000.", alternativeExplanations: ["One part is ₹30,000, so two parts are ₹60,000."], difficulty: "easy", tags: ["ratios", "budgets"] })),
    mockQuestion(makeMcq({ id: "m3-q19", domain: "logicalReasoning", prompt: "If today is Friday, what day will it be 10 days later?", options: ["Sunday", "Monday", "Tuesday", "Wednesday"], answerIndex: 1, explanation: "Ten days is one week plus three days; Friday plus three days is Monday.", alternativeExplanations: ["Move 7 days to Friday, then count Saturday, Sunday, Monday."], difficulty: "medium", tags: ["calendar", "modular-arithmetic"] })),
    mockQuestion(makeMcq({ id: "m3-q20", domain: "verbalReadingComprehension", prompt: "Which sentence avoids an unsupported causal claim?", options: ["Sales rose after the poster appeared, so the poster definitely caused the rise.", "Sales rose after the poster appeared; the poster may have contributed, but other factors need checking.", "The poster caused every sale.", "Because sales rose, no other explanation is possible."], answerIndex: 1, explanation: "It reports the sequence while acknowledging that correlation alone does not prove causation.", alternativeExplanations: ["Good evidence language distinguishes an observed association from a proven cause."], difficulty: "hard", tags: ["causation", "critical-reading"] }))
  ]
};

export const IIMB_MOCKS = Object.freeze({
  label: PRACTICE_LABEL,
  officialBlueprintStatus: "not-published",
  blueprintNote:
    "The official IIMB admissions page confirms an entrance test but does not publish a section-weight table. The weights below are a readiness mix created for practice and must not be presented as official.",
  practiceMix: [
    { domain: "quantitativeAptitude", label: "Quantitative aptitude", readinessWeight: 0.22 },
    { domain: "logicalReasoning", label: "Logical reasoning", readinessWeight: 0.22 },
    { domain: "verbalReadingComprehension", label: "Verbal and reading comprehension", readinessWeight: 0.2 },
    { domain: "dataInterpretation", label: "Data interpretation", readinessWeight: 0.2 },
    { domain: "economicsApplications", label: "Economics applications", readinessWeight: 0.16 }
  ],
  tests: [IIMB_MOCK_TEST_1, IIMB_MOCK_TEST_2, IIMB_MOCK_TEST_3]
});

const topicQuestion = ({
  id,
  domain,
  topic,
  prompt,
  options,
  answerIndex,
  explanation,
  difficulty = "medium",
  tags = []
}) => ({
  id,
  domain,
  topic,
  prompt,
  options,
  answerIndex,
  answer: options[answerIndex],
  explanation,
  alternativeExplanations: [explanation],
  difficulty,
  tags,
  contentLabel: PRACTICE_LABEL
});

/*
 * Topic practice is deliberately written as individual records rather than
 * cosmetic variants. IDs are permanent dashboard keys, so new questions should
 * be appended with new IDs instead of renumbering earlier records.
 */
export const IIMB_TOPIC_PRACTICE = Object.freeze([
  topicQuestion({ id: "topic-001", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "What is 7 × 8?", options: ["48", "54", "56", "64"], answerIndex: 2, explanation: "Seven groups of eight make 56.", difficulty: "easy", tags: ["multiplication"] }),
  topicQuestion({ id: "topic-002", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A ₹900 bill is split equally among 6 people. Each pays:", options: ["₹120", "₹150", "₹180", "₹200"], answerIndex: 1, explanation: "900 ÷ 6 = ₹150.", difficulty: "easy", tags: ["division"] }),
  topicQuestion({ id: "topic-003", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "What is 3/5 of 250?", options: ["100", "125", "150", "175"], answerIndex: 2, explanation: "250 ÷ 5 = 50, and 50 × 3 = 150.", difficulty: "easy", tags: ["fractions"] }),
  topicQuestion({ id: "topic-004", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "The average of 14 and 22 is:", options: ["16", "18", "20", "36"], answerIndex: 1, explanation: "(14 + 22) / 2 = 18.", difficulty: "easy", tags: ["averages"] }),
  topicQuestion({ id: "topic-005", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A ₹1,200 price is reduced by 25%. The reduction is:", options: ["₹250", "₹300", "₹350", "₹400"], answerIndex: 1, explanation: "One quarter of ₹1,200 is ₹300.", difficulty: "easy", tags: ["percentages"] }),
  topicQuestion({ id: "topic-006", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "The least common multiple of 6 and 8 is:", options: ["12", "18", "24", "48"], answerIndex: 2, explanation: "24 is the smallest number divisible by both 6 and 8.", difficulty: "easy", tags: ["lcm"] }),
  topicQuestion({ id: "topic-007", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "The highest common factor of 18 and 30 is:", options: ["3", "6", "9", "12"], answerIndex: 1, explanation: "Common factors include 1, 2, 3 and 6; 6 is largest.", difficulty: "easy", tags: ["hcf"] }),
  topicQuestion({ id: "topic-008", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A cyclist covers 45 km in 3 hours. Speed is:", options: ["12 km/h", "15 km/h", "18 km/h", "20 km/h"], answerIndex: 1, explanation: "Speed = 45 / 3 = 15 km/h.", difficulty: "easy", tags: ["speed"] }),
  topicQuestion({ id: "topic-009", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "If 4 notebooks cost ₹120, 7 notebooks cost at the same rate:", options: ["₹180", "₹200", "₹210", "₹240"], answerIndex: 2, explanation: "One notebook costs ₹30, so 7 cost ₹210.", difficulty: "easy", tags: ["unitary-method"] }),
  topicQuestion({ id: "topic-010", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A number increases from 80 to 100. The percentage increase is:", options: ["20%", "25%", "30%", "40%"], answerIndex: 1, explanation: "Increase 20 divided by original 80 equals 25%.", difficulty: "easy", tags: ["growth"] }),
  topicQuestion({ id: "topic-011", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A worker completes 2/7 of a task in one day. At that rate, the full task takes:", options: ["2 days", "3 days", "3.5 days", "7 days"], answerIndex: 2, explanation: "Time = 1 ÷ (2/7) = 7/2 = 3.5 days.", difficulty: "medium", tags: ["work"] }),
  topicQuestion({ id: "topic-012", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A shop buys an item for ₹400 and sells it for ₹460. Profit percentage is:", options: ["10%", "12%", "15%", "20%"], answerIndex: 2, explanation: "Profit is ₹60; 60/400 × 100 = 15%.", difficulty: "medium", tags: ["profit-loss"] }),
  topicQuestion({ id: "topic-013", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "Simple interest on ₹5,000 at 4% for 3 years is:", options: ["₹400", "₹500", "₹600", "₹700"], answerIndex: 2, explanation: "5,000 × 4 × 3 / 100 = ₹600.", difficulty: "medium", tags: ["simple-interest"] }),
  topicQuestion({ id: "topic-014", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "If 5 pens and 2 pencils total ₹70, and each pen costs ₹10, each pencil costs:", options: ["₹5", "₹10", "₹12.50", "₹15"], answerIndex: 1, explanation: "Pens cost ₹50, leaving ₹20 for two pencils, so each pencil costs ₹10.", difficulty: "medium", tags: ["linear-word-problem"] }),
  topicQuestion({ id: "topic-015", domain: "quantitativeAptitude", topic: "arithmetic", prompt: "A ratio 7:5 is divided from a total of 96. The larger share is:", options: ["40", "48", "56", "60"], answerIndex: 2, explanation: "12 parts make 96, so one part is 8; seven parts are 56.", difficulty: "medium", tags: ["ratios"] }),

  topicQuestion({ id: "topic-016", domain: "quantitativeAptitude", topic: "algebra", prompt: "Solve 2x + 9 = 19.", options: ["4", "5", "6", "7"], answerIndex: 1, explanation: "2x = 10, so x = 5.", difficulty: "easy", tags: ["linear-equations"] }),
  topicQuestion({ id: "topic-017", domain: "quantitativeAptitude", topic: "algebra", prompt: "If y = 3x − 1 and x = 4, y equals:", options: ["9", "10", "11", "12"], answerIndex: 2, explanation: "3 × 4 − 1 = 11.", difficulty: "easy", tags: ["substitution"] }),
  topicQuestion({ id: "topic-018", domain: "quantitativeAptitude", topic: "algebra", prompt: "The next term of 2, 5, 8, 11 is:", options: ["12", "13", "14", "15"], answerIndex: 2, explanation: "The common difference is 3, so 11 + 3 = 14.", difficulty: "easy", tags: ["arithmetic-sequence"] }),
  topicQuestion({ id: "topic-019", domain: "quantitativeAptitude", topic: "algebra", prompt: "If x/4 = 6, x is:", options: ["10", "18", "24", "30"], answerIndex: 2, explanation: "Multiply both sides by 4: x = 24.", difficulty: "easy", tags: ["equations"] }),
  topicQuestion({ id: "topic-020", domain: "quantitativeAptitude", topic: "algebra", prompt: "The positive solution to x² − 16 = 0 is:", options: ["−4", "0", "4", "16"], answerIndex: 2, explanation: "x² = 16, and the positive root is 4.", difficulty: "easy", tags: ["quadratics"] }),
  topicQuestion({ id: "topic-021", domain: "quantitativeAptitude", topic: "algebra", prompt: "If 3a = 2b and b = 9, a equals:", options: ["3", "6", "9", "12"], answerIndex: 1, explanation: "3a = 18, hence a = 6.", difficulty: "easy", tags: ["proportion"] }),
  topicQuestion({ id: "topic-022", domain: "quantitativeAptitude", topic: "algebra", prompt: "Which expression equals (x + 3)(x + 2)?", options: ["x² + 5x + 6", "x² + 6x + 5", "x² + x + 6", "x² + 5"], answerIndex: 0, explanation: "Multiply term by term: x² + 2x + 3x + 6.", difficulty: "medium", tags: ["factorisation"] }),
  topicQuestion({ id: "topic-023", domain: "quantitativeAptitude", topic: "algebra", prompt: "If 2m − 3 < 7, then:", options: ["m < 2", "m < 5", "m > 2", "m > 5"], answerIndex: 1, explanation: "2m < 10, so m < 5.", difficulty: "medium", tags: ["inequalities"] }),
  topicQuestion({ id: "topic-024", domain: "quantitativeAptitude", topic: "algebra", prompt: "The value of 2³ + 3² is:", options: ["13", "15", "17", "19"], answerIndex: 2, explanation: "8 + 9 = 17.", difficulty: "easy", tags: ["exponents"] }),
  topicQuestion({ id: "topic-025", domain: "quantitativeAptitude", topic: "algebra", prompt: "If p + q = 12 and p − q = 4, p is:", options: ["4", "6", "8", "10"], answerIndex: 2, explanation: "Adding the equations gives 2p = 16, so p = 8.", difficulty: "medium", tags: ["simultaneous-equations"] }),
  topicQuestion({ id: "topic-026", domain: "quantitativeAptitude", topic: "algebra", prompt: "A sequence has nth term 4n + 1. Its fifth term is:", options: ["17", "20", "21", "25"], answerIndex: 2, explanation: "4 × 5 + 1 = 21.", difficulty: "easy", tags: ["sequences"] }),
  topicQuestion({ id: "topic-027", domain: "quantitativeAptitude", topic: "algebra", prompt: "If z = 2 and w = −3, z² − w equals:", options: ["1", "5", "7", "9"], answerIndex: 2, explanation: "z² − w = 4 − (−3) = 7.", difficulty: "medium", tags: ["substitution", "integers"] }),
  topicQuestion({ id: "topic-028", domain: "quantitativeAptitude", topic: "algebra", prompt: "The roots of x² − 5x + 6 are:", options: ["1 and 6", "2 and 3", "−2 and −3", "0 and 6"], answerIndex: 1, explanation: "The factors are (x − 2)(x − 3).", difficulty: "medium", tags: ["quadratics", "factorisation"] }),
  topicQuestion({ id: "topic-029", domain: "quantitativeAptitude", topic: "algebra", prompt: "If a = 2b and b = 3c, then a:c equals:", options: ["2:3", "3:2", "6:1", "1:6"], answerIndex: 2, explanation: "a = 2(3c) = 6c, so a:c = 6:1.", difficulty: "medium", tags: ["ratios"] }),
  topicQuestion({ id: "topic-030", domain: "quantitativeAptitude", topic: "algebra", prompt: "The graph of y = x + 2 crosses the y-axis at:", options: ["−2", "0", "1", "2"], answerIndex: 3, explanation: "At x = 0, y = 2.", difficulty: "easy", tags: ["coordinate-geometry"] }),

  topicQuestion({ id: "topic-031", domain: "quantitativeAptitude", topic: "geometry", prompt: "The perimeter of a square of side 9 cm is:", options: ["18 cm", "27 cm", "36 cm", "81 cm"], answerIndex: 2, explanation: "Perimeter = 4 × 9 = 36 cm.", difficulty: "easy", tags: ["perimeter"] }),
  topicQuestion({ id: "topic-032", domain: "quantitativeAptitude", topic: "geometry", prompt: "A triangle has angles 50° and 60°. The third angle is:", options: ["60°", "70°", "80°", "90°"], answerIndex: 1, explanation: "Triangle angles sum to 180°, so 180 − 110 = 70°.", difficulty: "easy", tags: ["angles"] }),
  topicQuestion({ id: "topic-033", domain: "quantitativeAptitude", topic: "geometry", prompt: "The circumference of a circle with radius r is:", options: ["πr²", "2πr", "πd²", "r/2π"], answerIndex: 1, explanation: "Circumference equals 2πr.", difficulty: "easy", tags: ["circles"] }),
  topicQuestion({ id: "topic-034", domain: "quantitativeAptitude", topic: "geometry", prompt: "A right triangle has legs 6 and 8. Its hypotenuse is:", options: ["8", "9", "10", "14"], answerIndex: 2, explanation: "√(6² + 8²) = √100 = 10.", difficulty: "medium", tags: ["pythagoras"] }),
  topicQuestion({ id: "topic-035", domain: "quantitativeAptitude", topic: "geometry", prompt: "The area of a triangle with base 10 and height 7 is:", options: ["17", "35", "70", "140"], answerIndex: 1, explanation: "Area = 1/2 × 10 × 7 = 35 square units.", difficulty: "easy", tags: ["area"] }),
  topicQuestion({ id: "topic-036", domain: "quantitativeAptitude", topic: "geometry", prompt: "Opposite sides of a parallelogram are:", options: ["Always perpendicular", "Equal and parallel", "Always unequal", "Curved"], answerIndex: 1, explanation: "A parallelogram has two pairs of equal, parallel opposite sides.", difficulty: "easy", tags: ["properties"] }),
  topicQuestion({ id: "topic-037", domain: "quantitativeAptitude", topic: "geometry", prompt: "The volume of a cube of side 3 is:", options: ["9", "18", "27", "36"], answerIndex: 2, explanation: "Volume = side³ = 3³ = 27 cubic units.", difficulty: "easy", tags: ["volume"] }),
  topicQuestion({ id: "topic-038", domain: "quantitativeAptitude", topic: "geometry", prompt: "An angle of 120° is:", options: ["Acute", "Right", "Obtuse", "Reflex"], answerIndex: 2, explanation: "Obtuse angles are greater than 90° and less than 180°.", difficulty: "easy", tags: ["angles"] }),
  topicQuestion({ id: "topic-039", domain: "quantitativeAptitude", topic: "geometry", prompt: "The diagonal of a square of side 1 has length:", options: ["1/2", "1", "√2", "2"], answerIndex: 2, explanation: "By Pythagoras, diagonal = √(1² + 1²) = √2.", difficulty: "medium", tags: ["squares"] }),
  topicQuestion({ id: "topic-040", domain: "quantitativeAptitude", topic: "geometry", prompt: "A rectangle has area 48 and length 8. Its breadth is:", options: ["4", "6", "8", "12"], answerIndex: 1, explanation: "Breadth = area / length = 48 / 8 = 6.", difficulty: "easy", tags: ["rectangles"] }),
  topicQuestion({ id: "topic-041", domain: "quantitativeAptitude", topic: "geometry", prompt: "The sum of interior angles of a quadrilateral is:", options: ["180°", "270°", "360°", "540°"], answerIndex: 2, explanation: "A quadrilateral can be split into two triangles, giving 2 × 180° = 360°.", difficulty: "easy", tags: ["polygons"] }),
  topicQuestion({ id: "topic-042", domain: "quantitativeAptitude", topic: "geometry", prompt: "If two triangles have all three corresponding sides equal, they are congruent by:", options: ["AAA", "SAS", "SSS", "RHS only"], answerIndex: 2, explanation: "Three equal corresponding sides give SSS congruence.", difficulty: "easy", tags: ["congruence"] }),
  topicQuestion({ id: "topic-043", domain: "quantitativeAptitude", topic: "geometry", prompt: "A radius drawn to a tangent at the point of contact is:", options: ["Parallel to tangent", "Perpendicular to tangent", "Equal to diameter", "Always curved"], answerIndex: 1, explanation: "The radius is perpendicular to the tangent at contact.", difficulty: "medium", tags: ["circles", "tangents"] }),
  topicQuestion({ id: "topic-044", domain: "quantitativeAptitude", topic: "geometry", prompt: "The distance between (0,0) and (3,4) is:", options: ["3", "4", "5", "7"], answerIndex: 2, explanation: "Distance = √(3² + 4²) = 5.", difficulty: "easy", tags: ["coordinate-geometry"] }),
  topicQuestion({ id: "topic-045", domain: "quantitativeAptitude", topic: "geometry", prompt: "A semicircle has diameter 10. Its radius is:", options: ["2", "5", "10", "20"], answerIndex: 1, explanation: "Radius is half the diameter, so 5.", difficulty: "easy", tags: ["circles"] }),

  topicQuestion({ id: "topic-046", domain: "logicalReasoning", topic: "arrangements", prompt: "If A sits immediately before B, which pair is ordered correctly?", options: ["B, A", "A, B", "A, C, B only", "B, C, A"], answerIndex: 1, explanation: "Immediately before means A is directly to the left of B in the order.", difficulty: "easy", tags: ["ordering"] }),
  topicQuestion({ id: "topic-047", domain: "logicalReasoning", topic: "arrangements", prompt: "P is north of Q and R is east of P. R is from Q:", options: ["South-west", "North-west", "North-east", "South-east"], answerIndex: 2, explanation: "Move north from Q to P, then east to R: north-east.", difficulty: "easy", tags: ["directions"] }),
  topicQuestion({ id: "topic-048", domain: "logicalReasoning", topic: "series", prompt: "Find the next letter: B, D, F, H, __", options: ["I", "J", "K", "L"], answerIndex: 1, explanation: "The sequence skips one letter each time, so H + 2 = J.", difficulty: "easy", tags: ["letter-series"] }),
  topicQuestion({ id: "topic-049", domain: "logicalReasoning", topic: "series", prompt: "Find the missing number: 1, 4, 9, 16, __", options: ["20", "24", "25", "30"], answerIndex: 2, explanation: "These are squares 1², 2², 3², 4², so next is 5² = 25.", difficulty: "easy", tags: ["number-series"] }),
  topicQuestion({ id: "topic-050", domain: "logicalReasoning", topic: "syllogism", prompt: "All poets are readers. Mira is a poet. What must be true?", options: ["Mira is a reader", "Mira is not a reader", "All readers are poets", "No poet reads"], answerIndex: 0, explanation: "Mira belongs to the set of poets, which is contained in readers.", difficulty: "easy", tags: ["sets"] }),
  topicQuestion({ id: "topic-051", domain: "logicalReasoning", topic: "coding", prompt: "If CAT becomes DBU by shifting each letter one forward, DOG becomes:", options: ["EPH", "EOG", "CNE", "FPI"], answerIndex: 0, explanation: "D→E, O→P and G→H.", difficulty: "easy", tags: ["coding-decoding"] }),
  topicQuestion({ id: "topic-052", domain: "logicalReasoning", topic: "calendar", prompt: "How many days are in two weeks?", options: ["7", "10", "14", "21"], answerIndex: 2, explanation: "One week has seven days, so two have 14.", difficulty: "easy", tags: ["calendar"] }),
  topicQuestion({ id: "topic-053", domain: "logicalReasoning", topic: "blood-relations", prompt: "Tara's mother's brother is Tara's:", options: ["Father", "Uncle", "Cousin", "Nephew"], answerIndex: 1, explanation: "The mother's brother is the maternal uncle.", difficulty: "easy", tags: ["relationships"] }),
  topicQuestion({ id: "topic-054", domain: "logicalReasoning", topic: "ranking", prompt: "In a race, Kavya finishes before Rohan but after Leena. Who finishes first among the three?", options: ["Kavya", "Rohan", "Leena", "Cannot be known"], answerIndex: 2, explanation: "The order is Leena, Kavya, Rohan.", difficulty: "easy", tags: ["ordering"] }),
  topicQuestion({ id: "topic-055", domain: "logicalReasoning", topic: "logic", prompt: "If it rains, the match is postponed. It rains. What follows?", options: ["The match is postponed", "The match definitely happens", "It cannot be known", "The match is cancelled forever"], answerIndex: 0, explanation: "This is direct application of the stated conditional rule.", difficulty: "easy", tags: ["conditional-logic"] }),
  topicQuestion({ id: "topic-056", domain: "logicalReasoning", topic: "sets", prompt: "A set has 4 elements. How many elements are in its power set?", options: ["4", "8", "12", "16"], answerIndex: 3, explanation: "A power set has 2ⁿ subsets, so 2⁴ = 16.", difficulty: "medium", tags: ["sets"] }),
  topicQuestion({ id: "topic-057", domain: "logicalReasoning", topic: "arrangements", prompt: "Three books X, Y and Z are arranged. If X is first and Z is last, Y is:", options: ["First", "Middle", "Last", "Outside the row"], answerIndex: 1, explanation: "Only Y can occupy the position between X and Z.", difficulty: "easy", tags: ["arrangements"] }),
  topicQuestion({ id: "topic-058", domain: "logicalReasoning", topic: "analogy", prompt: "Bird is to nest as bee is to:", options: ["Hive", "Pond", "Stable", "Burrow"], answerIndex: 0, explanation: "A hive is the home associated with bees.", difficulty: "easy", tags: ["analogy"] }),
  topicQuestion({ id: "topic-059", domain: "logicalReasoning", topic: "odd-one-out", prompt: "Which is the odd one out: 2, 4, 6, 9?", options: ["2", "4", "6", "9"], answerIndex: 3, explanation: "2, 4 and 6 are even; 9 is odd.", difficulty: "easy", tags: ["classification"] }),
  topicQuestion({ id: "topic-060", domain: "logicalReasoning", topic: "directions", prompt: "Facing east, you turn left. You now face:", options: ["North", "South", "West", "East"], answerIndex: 0, explanation: "A left turn from east points north.", difficulty: "easy", tags: ["directions"] }),

  topicQuestion({ id: "topic-061", domain: "verbalReadingComprehension", topic: "vocabulary", prompt: "The closest meaning of 'scarce' is:", options: ["Abundant", "Rare", "Cheap", "Bright"], answerIndex: 1, explanation: "Scarce means limited or hard to find.", difficulty: "easy", tags: ["synonyms"] }),
  topicQuestion({ id: "topic-062", domain: "verbalReadingComprehension", topic: "vocabulary", prompt: "The opposite of 'expand' is:", options: ["Enlarge", "Contract", "Explain", "Explore"], answerIndex: 1, explanation: "Contract means become smaller, the opposite of expand.", difficulty: "easy", tags: ["antonyms"] }),
  topicQuestion({ id: "topic-063", domain: "verbalReadingComprehension", topic: "grammar", prompt: "Choose the correct article: 'She is __ honest learner.'", options: ["a", "an", "the", "no article"], answerIndex: 1, explanation: "'Honest' begins with a vowel sound, so 'an' is used.", difficulty: "easy", tags: ["articles"] }),
  topicQuestion({ id: "topic-064", domain: "verbalReadingComprehension", topic: "grammar", prompt: "Choose the correctly punctuated sentence.", options: ["After class Ayush practised keyboard.", "After class, Ayush practised keyboard.", "After, class Ayush practised keyboard.", "After class Ayush, practised keyboard."], answerIndex: 1, explanation: "A comma separates the introductory phrase from the main clause.", difficulty: "easy", tags: ["punctuation"] }),
  topicQuestion({ id: "topic-065", domain: "verbalReadingComprehension", topic: "grammar", prompt: "The plural of 'analysis' is:", options: ["Analysises", "Analysies", "Analyses", "Analysis"], answerIndex: 2, explanation: "The standard plural is analyses.", difficulty: "easy", tags: ["word-forms"] }),
  topicQuestion({ id: "topic-066", domain: "verbalReadingComprehension", topic: "rc", prompt: "Passage: 'Public transport reduces congestion when it is frequent, reliable and convenient.' Which condition is not named?", options: ["Frequency", "Reliability", "Convenience", "Free tickets"], answerIndex: 3, explanation: "The passage names the first three conditions, not free tickets.", difficulty: "easy", tags: ["reading-detail"] }),
  topicQuestion({ id: "topic-067", domain: "verbalReadingComprehension", topic: "rc", prompt: "A passage argues that exercise improves mood but says results vary by person. Its tone is:", options: ["Qualified", "Absolutely certain", "Sarcastic", "Unrelated"], answerIndex: 0, explanation: "The caveat that results vary qualifies the central claim.", difficulty: "medium", tags: ["tone", "inference"] }),
  topicQuestion({ id: "topic-068", domain: "verbalReadingComprehension", topic: "grammar", prompt: "In 'The keyboard that Ayush plays is compact', the clause 'that Ayush plays' is:", options: ["A question", "A relative clause", "A command", "A list"], answerIndex: 1, explanation: "It begins with a relative pronoun and modifies 'keyboard'.", difficulty: "medium", tags: ["clauses"] }),
  topicQuestion({ id: "topic-069", domain: "verbalReadingComprehension", topic: "vocabulary", prompt: "'Feasible' most nearly means:", options: ["Impossible", "Practical to do", "Already completed", "Very expensive"], answerIndex: 1, explanation: "Feasible means capable of being done in practice.", difficulty: "easy", tags: ["synonyms"] }),
  topicQuestion({ id: "topic-070", domain: "verbalReadingComprehension", topic: "argument", prompt: "A claim supported by a survey of 10 volunteers has a limitation because:", options: ["All surveys are invalid", "The small, self-selected sample may not represent everyone", "Volunteers cannot answer questions", "The claim must be true"], answerIndex: 1, explanation: "Small self-selected samples can create sampling bias and weak generalisation.", difficulty: "medium", tags: ["evidence", "sampling"] }),
  topicQuestion({ id: "topic-071", domain: "verbalReadingComprehension", topic: "grammar", prompt: "Choose the best revision: 'The reason is because prices rose.'", options: ["The reason is because prices rose.", "The reason is that prices rose.", "The reason, prices rose.", "Because is the reason prices rose."], answerIndex: 1, explanation: "'The reason is that' is the standard concise construction.", difficulty: "medium", tags: ["usage"] }),
  topicQuestion({ id: "topic-072", domain: "verbalReadingComprehension", topic: "rc", prompt: "If an author presents an opposing view and then responds to it, the author is using:", options: ["Counterargument", "Random listing", "Only narration", "A definition"], answerIndex: 0, explanation: "Introducing and answering a contrary view is counterargument.", difficulty: "easy", tags: ["argument-structure"] }),
  topicQuestion({ id: "topic-073", domain: "verbalReadingComprehension", topic: "connectors", prompt: "'Although the data are limited, the pattern is worth examining.' 'Although' signals:", options: ["Concession", "Addition", "Time only", "Definition"], answerIndex: 0, explanation: "It concedes a limitation before presenting a qualified conclusion.", difficulty: "medium", tags: ["connectors"] }),
  topicQuestion({ id: "topic-074", domain: "verbalReadingComprehension", topic: "vocabulary", prompt: "Someone who is 'adaptable' can:", options: ["Adjust to new conditions", "Never change", "Avoid every task", "Predict every event"], answerIndex: 0, explanation: "Adaptable people adjust their approach when circumstances change.", difficulty: "easy", tags: ["vocabulary"] }),
  topicQuestion({ id: "topic-075", domain: "verbalReadingComprehension", topic: "critical-reading", prompt: "Which statement is an opinion rather than a directly verifiable fact?", options: ["The meeting began at 10:00", "The report has 20 pages", "This is the most inspiring report", "The file is dated Monday"], answerIndex: 2, explanation: "'Most inspiring' is a judgement requiring a standard, not a simple record.", difficulty: "easy", tags: ["fact-opinion"] }),

  topicQuestion({ id: "topic-076", domain: "dataInterpretation", topic: "tables", prompt: "A table shows 12, 18 and 30 applications. Total applications are:", options: ["48", "54", "60", "66"], answerIndex: 2, explanation: "12 + 18 + 30 = 60.", difficulty: "easy", tags: ["addition"] }),
  topicQuestion({ id: "topic-077", domain: "dataInterpretation", topic: "tables", prompt: "A class has 24 students; 18 submit a form. What percentage submit?", options: ["60%", "70%", "75%", "80%"], answerIndex: 2, explanation: "18/24 = 3/4 = 75%.", difficulty: "easy", tags: ["percentages"] }),
  topicQuestion({ id: "topic-078", domain: "dataInterpretation", topic: "charts", prompt: "A bar chart shows values 15, 22, 19 and 11. The second bar exceeds the fourth by:", options: ["9", "11", "13", "33"], answerIndex: 1, explanation: "22 − 11 = 11.", difficulty: "easy", tags: ["bar-chart"] }),
  topicQuestion({ id: "topic-079", domain: "dataInterpretation", topic: "averages", prompt: "The average of 6, 10, 14 and 18 is:", options: ["10", "12", "14", "16"], answerIndex: 1, explanation: "The total is 48; 48/4 = 12.", difficulty: "easy", tags: ["averages"] }),
  topicQuestion({ id: "topic-080", domain: "dataInterpretation", topic: "growth", prompt: "A value changes from 50 to 40. The percentage decrease is:", options: ["10%", "20%", "25%", "40%"], answerIndex: 1, explanation: "Decrease is 10; 10/50 × 100 = 20%.", difficulty: "easy", tags: ["percentage-change"] }),
  topicQuestion({ id: "topic-081", domain: "dataInterpretation", topic: "pie-charts", prompt: "A 72° sector of a pie chart represents what percentage?", options: ["10%", "15%", "20%", "25%"], answerIndex: 2, explanation: "72/360 = 0.2 = 20%.", difficulty: "medium", tags: ["pie-chart"] }),
  topicQuestion({ id: "topic-082", domain: "dataInterpretation", topic: "ratios", prompt: "A survey ratio of tea to coffee is 3:2. Out of 50 respondents, tea respondents are:", options: ["20", "25", "30", "35"], answerIndex: 2, explanation: "Three of five parts are tea, so 3/5 × 50 = 30.", difficulty: "easy", tags: ["ratios", "survey"] }),
  topicQuestion({ id: "topic-083", domain: "dataInterpretation", topic: "statistics", prompt: "Which measure is most affected by one extremely large outlier?", options: ["Mean", "Median", "Mode", "Minimum"], answerIndex: 0, explanation: "The mean uses every value and is pulled by an extreme observation.", difficulty: "medium", tags: ["outliers"] }),
  topicQuestion({ id: "topic-084", domain: "dataInterpretation", topic: "tables", prompt: "A store sells 80 units in April and 100 in May. May sales are what fraction of April sales?", options: ["4/5", "5/4", "1/2", "2"], answerIndex: 1, explanation: "100/80 = 5/4.", difficulty: "medium", tags: ["fractions", "comparison"] }),
  topicQuestion({ id: "topic-085", domain: "dataInterpretation", topic: "averages", prompt: "Three numbers have mean 20. If two are 15 and 25, the third is:", options: ["15", "20", "25", "30"], answerIndex: 1, explanation: "Total is 60; 60 − 15 − 25 = 20.", difficulty: "easy", tags: ["averages"] }),
  topicQuestion({ id: "topic-086", domain: "dataInterpretation", topic: "index-numbers", prompt: "If a price index moves from 100 to 125, the implied increase is:", options: ["10%", "20%", "25%", "125%"], answerIndex: 2, explanation: "The index rises 25 points from a base of 100, so 25%.", difficulty: "easy", tags: ["index"] }),
  topicQuestion({ id: "topic-087", domain: "dataInterpretation", topic: "probability", prompt: "A fair coin is tossed once. Probability of heads is:", options: ["0", "1/4", "1/2", "1"], answerIndex: 2, explanation: "There are two equally likely outcomes and one is heads.", difficulty: "easy", tags: ["probability"] }),
  topicQuestion({ id: "topic-088", domain: "dataInterpretation", topic: "probability", prompt: "A bag has 3 red and 2 blue balls. Probability of drawing blue is:", options: ["1/5", "2/5", "3/5", "1/2"], answerIndex: 1, explanation: "Two blue balls out of five total gives 2/5.", difficulty: "easy", tags: ["probability"] }),
  topicQuestion({ id: "topic-089", domain: "dataInterpretation", topic: "sampling", prompt: "Selecting every tenth name from an ordered list is:", options: ["Simple random sampling", "Systematic sampling", "Snowball sampling", "Census"], answerIndex: 1, explanation: "A fixed interval from an ordered list is systematic sampling.", difficulty: "medium", tags: ["sampling"] }),
  topicQuestion({ id: "topic-090", domain: "dataInterpretation", topic: "correlation", prompt: "A positive correlation means two variables tend to:", options: ["Move in opposite directions only", "Move together in the same direction", "Be identical", "Have no observations"], answerIndex: 1, explanation: "Positive correlation means larger values of one tend to accompany larger values of the other.", difficulty: "easy", tags: ["correlation"] }),

  topicQuestion({ id: "topic-091", domain: "economicsApplications", topic: "demand", prompt: "A movement along a demand curve is caused by a change in:", options: ["The good's own price", "Consumer tastes only", "Population only", "Technology only"], answerIndex: 0, explanation: "With other factors held constant, own price changes move quantity demanded along the curve.", difficulty: "medium", tags: ["demand"] }),
  topicQuestion({ id: "topic-092", domain: "economicsApplications", topic: "supply", prompt: "An improvement in production technology generally shifts supply:", options: ["Left", "Right", "To zero", "Into demand"], answerIndex: 1, explanation: "Lower unit costs allow producers to supply more at each price, a rightward shift.", difficulty: "easy", tags: ["supply", "technology"] }),
  topicQuestion({ id: "topic-093", domain: "economicsApplications", topic: "elasticity", prompt: "If a 10% price rise leads to a 2% quantity fall, demand is:", options: ["Elastic", "Inelastic", "Unit elastic", "Perfectly elastic"], answerIndex: 1, explanation: "The quantity response is smaller than the price response, so elasticity is less than one.", difficulty: "medium", tags: ["elasticity"] }),
  topicQuestion({ id: "topic-094", domain: "economicsApplications", topic: "opportunity-cost", prompt: "Choosing a free study session over a paid shift has an opportunity cost equal to:", options: ["The forgone wage", "Zero in every case", "The study room's colour", "All future wages"], answerIndex: 0, explanation: "The next-best alternative is the paid shift and its forgone wage.", difficulty: "easy", tags: ["opportunity-cost"] }),
  topicQuestion({ id: "topic-095", domain: "economicsApplications", topic: "market-equilibrium", prompt: "At equilibrium in a simple competitive market:", options: ["Quantity demanded equals quantity supplied", "Demand is always zero", "Supply is always zero", "Price must be free"], answerIndex: 0, explanation: "Equilibrium is the point where planned buying and selling quantities match.", difficulty: "easy", tags: ["equilibrium"] }),
  topicQuestion({ id: "topic-096", domain: "economicsApplications", topic: "inflation", prompt: "Unexpected inflation tends to reduce the real purchasing power of a fixed cash balance because:", options: ["Prices generally rise", "All goods become free", "Money becomes heavier", "Output must double"], answerIndex: 0, explanation: "The same nominal cash buys fewer goods when the general price level rises.", difficulty: "easy", tags: ["inflation"] }),
  topicQuestion({ id: "topic-097", domain: "economicsApplications", topic: "gdp", prompt: "GDP measures the market value of final goods and services produced:", options: ["Within a country over a period", "Only by households", "Only abroad", "Only in one shop"], answerIndex: 0, explanation: "GDP captures final production within an economy during a specified period.", difficulty: "easy", tags: ["gdp"] }),
  topicQuestion({ id: "topic-098", domain: "economicsApplications", topic: "fiscal-policy", prompt: "Government spending and taxation are tools of:", options: ["Fiscal policy", "Monetary policy only", "Weather policy", "Private accounting"], answerIndex: 0, explanation: "Fiscal policy uses the public budget to influence economic activity.", difficulty: "easy", tags: ["fiscal-policy"] }),
  topicQuestion({ id: "topic-099", domain: "economicsApplications", topic: "monetary-policy", prompt: "A central bank's policy interest rate mainly affects the cost of:", options: ["Credit", "Sunlight", "Land area", "Past output"], answerIndex: 0, explanation: "The policy rate influences borrowing and lending conditions in the financial system.", difficulty: "easy", tags: ["monetary-policy"] }),
  topicQuestion({ id: "topic-100", domain: "economicsApplications", topic: "externalities", prompt: "Noise from a late-night venue imposing disturbance on neighbours is a:", options: ["Positive externality", "Negative externality", "Private benefit only", "Public good"], answerIndex: 1, explanation: "The activity imposes an unpriced cost on third parties.", difficulty: "easy", tags: ["externalities"] }),
  topicQuestion({ id: "topic-101", domain: "economicsApplications", topic: "public-finance", prompt: "A tax on pollution is intended to:", options: ["Make the external cost part of the decision", "Guarantee no production", "Remove all preferences", "Create a free good"], answerIndex: 0, explanation: "A corrective tax can align private incentives more closely with social costs.", difficulty: "medium", tags: ["pigouvian-tax", "policy"] }),
  topicQuestion({ id: "topic-102", domain: "economicsApplications", topic: "trade", prompt: "Comparative advantage is based on lower:", options: ["Opportunity cost", "Population", "Temperature", "Currency colour"], answerIndex: 0, explanation: "Comparative advantage means producing a good at a lower opportunity cost than another producer.", difficulty: "medium", tags: ["trade"] }),
  topicQuestion({ id: "topic-103", domain: "economicsApplications", topic: "labour", prompt: "Human capital refers to:", options: ["Skills and knowledge embodied in people", "Only physical machines", "Only banknotes", "A country's coastline"], answerIndex: 0, explanation: "Education, training and experience are forms of human capital.", difficulty: "easy", tags: ["labour", "human-capital"] }),
  topicQuestion({ id: "topic-104", domain: "economicsApplications", topic: "consumer-choice", prompt: "A budget constraint shows combinations of goods a consumer can afford given:", options: ["Income and prices", "Weather only", "One preference only", "GDP alone"], answerIndex: 0, explanation: "Affordability depends on available income and the prices of goods.", difficulty: "easy", tags: ["consumer-choice"] }),
  topicQuestion({ id: "topic-105", domain: "economicsApplications", topic: "market-structure", prompt: "A market with many sellers offering differentiated products is closest to:", options: ["Monopolistic competition", "Pure monopoly", "Monopsony only", "Barter with no firms"], answerIndex: 0, explanation: "Many sellers and product differentiation are features of monopolistic competition.", difficulty: "medium", tags: ["market-structure"] }),

  topicQuestion({ id: "topic-106", domain: "dataInterpretation", topic: "finance", prompt: "If a ₹10,000 deposit earns 6% simple interest for one year, interest is:", options: ["₹60", "₹600", "₹1,600", "₹6,000"], answerIndex: 1, explanation: "6% of ₹10,000 is ₹600.", difficulty: "easy", tags: ["interest"] }),
  topicQuestion({ id: "topic-107", domain: "dataInterpretation", topic: "finance", prompt: "A portfolio has 2 assets weighing 40% and 60%. The weights sum to:", options: ["80%", "90%", "100%", "120%"], answerIndex: 2, explanation: "40% + 60% = 100%.", difficulty: "easy", tags: ["weights"] }),
  topicQuestion({ id: "topic-108", domain: "dataInterpretation", topic: "statistics", prompt: "The standard deviation is zero when all observations are:", options: ["Different", "Equal", "Negative", "Missing"], answerIndex: 1, explanation: "There is no spread when every observation has the same value.", difficulty: "easy", tags: ["dispersion"] }),
  topicQuestion({ id: "topic-109", domain: "dataInterpretation", topic: "probability", prompt: "The probability of an event that cannot happen is:", options: ["−1", "0", "1/2", "1"], answerIndex: 1, explanation: "An impossible event has probability zero.", difficulty: "easy", tags: ["probability"] }),
  topicQuestion({ id: "topic-110", domain: "dataInterpretation", topic: "probability", prompt: "For any event E, P(E) + P(not E) equals:", options: ["0", "1/2", "1", "2"], answerIndex: 2, explanation: "An event and its complement cover all possible outcomes.", difficulty: "easy", tags: ["complements"] }),
  topicQuestion({ id: "topic-111", domain: "dataInterpretation", topic: "statistics", prompt: "If every value in a dataset is increased by 5, the mean:", options: ["Falls by 5", "Stays unchanged", "Rises by 5", "Becomes zero"], answerIndex: 2, explanation: "Adding a constant to every observation adds the same constant to the mean.", difficulty: "medium", tags: ["mean"] }),
  topicQuestion({ id: "topic-112", domain: "dataInterpretation", topic: "statistics", prompt: "If every value is multiplied by 3, the range is:", options: ["Unchanged", "Tripled", "Increased by 3 only", "Divided by 3"], answerIndex: 1, explanation: "Both maximum and minimum scale by 3, so their difference scales by 3.", difficulty: "medium", tags: ["range"] }),
  topicQuestion({ id: "topic-113", domain: "dataInterpretation", topic: "index-numbers", prompt: "A base-year index is usually set to:", options: ["0", "1", "100", "1,000"], answerIndex: 2, explanation: "Many price and quantity index systems set the base year at 100.", difficulty: "easy", tags: ["index"] }),
  topicQuestion({ id: "topic-114", domain: "dataInterpretation", topic: "finance", prompt: "A loan of ₹8,000 repaid as ₹8,800 has total interest of:", options: ["₹400", "₹600", "₹800", "₹1,000"], answerIndex: 2, explanation: "Interest = repayment − principal = ₹800.", difficulty: "easy", tags: ["loans"] }),
  topicQuestion({ id: "topic-115", domain: "dataInterpretation", topic: "statistics", prompt: "The median is especially useful when a dataset contains:", options: ["Outliers", "No values", "Only identical labels", "No ordering"], answerIndex: 0, explanation: "The median is less pulled by extreme values than the mean.", difficulty: "medium", tags: ["median", "outliers"] }),
  topicQuestion({ id: "topic-116", domain: "logicalReasoning", topic: "logic", prompt: "If all A are B and all B are C, then:", options: ["All A are C", "No A are C", "All C are A", "Some C are not B"], answerIndex: 0, explanation: "Set inclusion is transitive: A ⊆ B and B ⊆ C imply A ⊆ C.", difficulty: "easy", tags: ["syllogism"] }),
  topicQuestion({ id: "topic-117", domain: "logicalReasoning", topic: "logic", prompt: "The contrapositive of 'If P, then Q' is:", options: ["If Q, then P", "If not P, then not Q", "If not Q, then not P", "P and Q"], answerIndex: 2, explanation: "The logically equivalent contrapositive is not Q implies not P.", difficulty: "medium", tags: ["conditional-logic"] }),
  topicQuestion({ id: "topic-118", domain: "verbalReadingComprehension", topic: "argument", prompt: "A conclusion that goes beyond the evidence commits:", options: ["Overgeneralisation", "Definition", "Measurement", "Translation"], answerIndex: 0, explanation: "Overgeneralisation extends a limited observation to an unjustifiably broad claim.", difficulty: "medium", tags: ["fallacies"] }),
  topicQuestion({ id: "topic-119", domain: "economicsApplications", topic: "development", prompt: "A measure of development that includes health and education alongside income is broader than:", options: ["A single income measure", "A multi-dimensional index", "A school lesson", "A weather chart"], answerIndex: 0, explanation: "Health and education add dimensions beyond income alone.", difficulty: "easy", tags: ["development"] }),
  topicQuestion({ id: "topic-120", domain: "economicsApplications", topic: "sustainability", prompt: "Sustainable development aims to meet present needs while:", options: ["Ignoring future generations", "Protecting the ability of future generations to meet their needs", "Maximising waste", "Stopping all innovation"], answerIndex: 1, explanation: "This is the core intergenerational idea in the common definition of sustainable development.", difficulty: "easy", tags: ["sustainability"] })
]);

const makeInterview = ({
  id,
  institution,
  question,
  tester,
  structure,
  illustrativeAnswer,
  mistakes,
  followUp,
  tags
}) => ({
  id,
  institution,
  question,
  tester,
  structure,
  illustrativeAnswer,
  mistakes,
  followUp,
  tags,
  note: "Illustrative practice answer for an 18-year-old; replace it with Ayush's truthful experience and current facts."
});

export const INTERVIEW_QUESTIONS = Object.freeze([
  makeInterview({ id: "int-001", institution: "IIM Bangalore", question: "Tell us about yourself.", tester: "Whether the candidate can give a clear, grounded introduction.", structure: ["present identity", "academic interest", "one real personal interest", "why this conversation"], illustrativeAnswer: "I am Ayush, an 18-year-old student who is becoming increasingly interested in how economic choices affect businesses and ordinary households. I enjoy fitness because it has taught me consistency, and I also play keyboard, which gives me a creative break. I am exploring programmes where I can build quantitative, communication and business foundations together.", mistakes: ["Reciting a long biography", "Inventing achievements", "Listing interests without linking them to learning"], followUp: "What have fitness or keyboard taught you that would help you study?", tags: ["introduction", "self-awareness"] }),
  makeInterview({ id: "int-002", institution: "IIM Bangalore", question: "Why are you interested in IIMB's BBA in Digital Business and Entrepreneurship?", tester: "Fit with the actual programme rather than a generic brand answer.", structure: ["name the real programme", "mention digital-business interest", "explain learning fit", "show openness to effort"], illustrativeAnswer: "I understand that this is a BBA in Digital Business and Entrepreneurship, not an undergraduate Economics degree. I am interested because it combines business thinking with digital contexts, and I want to learn how products, markets and decisions fit together. I would use economics as a way to analyse choices while building broader business skills.", mistakes: ["Calling it an Economics degree", "Claiming a guaranteed career", "Using only the institution's reputation"], followUp: "Which part of the programme would you want to understand first?", tags: ["IIMB", "programme-fit"] }),
  makeInterview({ id: "int-003", institution: "IIM Bangalore", question: "Why economics if the programme is BBA-DBE?", tester: "Conceptual precision and ability to distinguish adjacent fields.", structure: ["acknowledge distinction", "define economics interest", "connect to business", "avoid overclaiming"], illustrativeAnswer: "Economics interests me because it gives a way to think about scarcity, incentives and trade-offs. The BBA-DBE is broader, so I would not describe it as an Economics degree. I see economics as one useful lens within digital business and entrepreneurship, alongside data, communication and management.", mistakes: ["Arguing with the programme description", "Treating one subject as the whole degree", "Using textbook terms without an example"], followUp: "Give one business decision where opportunity cost matters.", tags: ["economics", "programme-fit"] }),
  makeInterview({ id: "int-004", institution: "IIM Bangalore", question: "What does digital business mean to you?", tester: "Ability to explain a broad term in plain language.", structure: ["simple definition", "customer or platform example", "role of data", "limitation or risk"], illustrativeAnswer: "To me, digital business uses online tools, data and platforms to create or deliver value. A fitness app, for example, can connect users to plans and track activity. The digital part can improve convenience, but it also raises questions about privacy, access and whether the information actually helps users.", mistakes: ["Equating digital business with social media only", "Using buzzwords", "Ignoring users and trade-offs"], followUp: "What would you measure to see whether the app is useful?", tags: ["digital-business", "application"] }),
  makeInterview({ id: "int-005", institution: "IIM Bangalore", question: "What is entrepreneurship?", tester: "Understanding of value creation under uncertainty.", structure: ["plain definition", "problem and solution", "risk", "learning loop"], illustrativeAnswer: "Entrepreneurship is the process of identifying a problem, organising resources and testing a solution under uncertainty. It is not only about starting a company; it also involves learning from users, managing risk and improving the offering. A good idea still needs evidence that it solves a real problem.", mistakes: ["Defining it as only making money", "Romanticising risk", "Forgetting customers"], followUp: "How would you test an idea before spending heavily?", tags: ["entrepreneurship", "problem-solving"] }),
  makeInterview({ id: "int-006", institution: "IIM Bangalore", question: "Explain opportunity cost using your routine.", tester: "Whether a basic economics concept can be applied honestly.", structure: ["define next-best alternative", "give routine example", "state the trade-off", "avoid calling every cost opportunity cost"], illustrativeAnswer: "If I spend an evening practising keyboard, the opportunity cost could be the most valuable alternative I give up, such as a planned study session or a paid activity if one existed. It is not automatically every other thing I could have done. The key is choosing the next-best alternative based on the situation.", mistakes: ["Calling the purchase price opportunity cost", "Listing all alternatives", "Inventing a job or achievement"], followUp: "Can opportunity cost change from one day to another?", tags: ["economics", "opportunity-cost"] }),
  makeInterview({ id: "int-007", institution: "IIM Bangalore", question: "What is one economic idea you find useful?", tester: "Depth and example rather than memorised definition.", structure: ["name concept", "define it", "give everyday example", "state a caveat"], illustrativeAnswer: "I find incentives useful. A reward or penalty can change behaviour, but the response depends on what people value and what alternatives they have. For example, a gym discount may encourage attendance for some people, but convenience and habit may matter more for others.", mistakes: ["Claiming one incentive always works", "No example", "Using a slogan instead of reasoning"], followUp: "Can incentives have unintended effects?", tags: ["economics", "reasoning"] }),
  makeInterview({ id: "int-008", institution: "IIM Bangalore", question: "What would you do if your team disagreed with your idea?", tester: "Listening, evidence use and collaborative judgement.", structure: ["listen", "clarify disagreement", "test assumptions", "commit to a decision"], illustrativeAnswer: "I would first ask what concern the other person is raising instead of defending the idea immediately. If possible, I would compare the assumptions with a small test or relevant evidence. After hearing the team, I would support the agreed decision and review the outcome rather than treating disagreement as personal.", mistakes: ["Saying you would always persuade everyone", "Avoiding decisions", "Treating disagreement as conflict"], followUp: "What if the deadline is too short for a full test?", tags: ["teamwork", "decision-making"] }),
  makeInterview({ id: "int-009", institution: "IIM Bangalore", question: "How do you handle a topic you do not understand?", tester: "Learning habits and intellectual honesty.", structure: ["identify gap", "break it down", "ask or research", "check understanding"], illustrativeAnswer: "I would state exactly which step I do not understand, review a simpler explanation, and ask a focused question. Then I would solve a small example without looking at the answer. If I still struggle, I would note the gap and return to it instead of pretending that I understood.", mistakes: ["Saying you never struggle", "Depending only on memorisation", "Blaming the teacher immediately"], followUp: "How would you ask for help without asking someone to do the work for you?", tags: ["learning", "self-awareness"] }),
  makeInterview({ id: "int-010", institution: "IIM Bangalore", question: "What is a digital platform?", tester: "Concept clarity and ability to distinguish platform from ordinary product.", structure: ["define connection", "name two sides", "network effect", "risk"], illustrativeAnswer: "A digital platform helps different groups interact, such as learners and instructors or buyers and sellers. Its value can grow when more participants make the interaction more useful, although that can also create privacy, quality or competition concerns. A platform is more than simply putting a brochure online.", mistakes: ["Calling every website a platform", "Ignoring the participant groups", "Treating network effects as guaranteed"], followUp: "What could make a platform lose users?", tags: ["digital-business", "platforms"] }),
  makeInterview({ id: "int-011", institution: "IIM Bangalore", question: "How can data help a business, and what can go wrong?", tester: "Balanced data literacy.", structure: ["use case", "quality", "privacy", "human judgement"], illustrativeAnswer: "Data can help a business see patterns, forecast demand or improve a service. It can mislead if the sample is biased, the measure is a poor proxy or the data are outdated. A responsible decision also considers privacy and human context rather than treating a dashboard as an automatic answer.", mistakes: ["Saying more data always solves the problem", "Ignoring consent", "Confusing correlation with causation"], followUp: "What would you check before trusting a survey?", tags: ["data", "ethics"] }),
  makeInterview({ id: "int-012", institution: "IIM Bangalore", question: "What does a good failure look like?", tester: "Reflection without glorifying avoidable mistakes.", structure: ["small and bounded", "clear learning", "changed next step", "responsibility"], illustrativeAnswer: "A good failure is a bounded attempt where the team learns something specific and records it honestly. It should not hide preventable harm or poor preparation. For example, a small trial might show that users do not understand an instruction, allowing the next version to improve before a larger launch.", mistakes: ["Calling every failure good", "Blaming users", "Not describing what changed"], followUp: "How would you decide whether to continue or stop?", tags: ["entrepreneurship", "reflection"] }),
  makeInterview({ id: "int-013", institution: "IIM Bangalore", question: "How do you balance fitness, keyboard and study?", tester: "Realistic routine and prioritisation.", structure: ["name constraints", "describe planning", "show flexibility", "avoid false precision"], illustrativeAnswer: "I try to give important work a defined block and keep fitness and keyboard as regular activities rather than waiting for a perfect free day. If a deadline changes, I can shorten a session without dropping the habit completely. The goal is a sustainable routine, not claiming that every day is perfectly balanced.", mistakes: ["Presenting an impossible timetable", "Calling hobbies achievements", "Ignoring rest"], followUp: "What changes during an exam week?", tags: ["routine", "fitness", "keyboard"] }),
  makeInterview({ id: "int-014", institution: "IIM Bangalore", question: "What current business topic would you like to explore?", tester: "Curiosity and ability to frame a topic without fake current claims.", structure: ["topic", "question", "stakeholders", "what must be verified"], illustrativeAnswer: "I would like to explore how digital services use personalisation without making users feel watched. I would compare user convenience, business value and privacy. Before citing a current policy or statistic, I would verify it from an authoritative source rather than relying on a headline.", mistakes: ["Inventing a statistic", "Making a sweeping political claim", "Not framing a question"], followUp: "Whose perspective might your first answer miss?", tags: ["curiosity", "digital-business"] }),
  makeInterview({ id: "int-015", institution: "IIM Bangalore", question: "What does consumer choice mean?", tester: "Connecting economics to observable behaviour.", structure: ["definition", "constraints", "example", "limits"], illustrativeAnswer: "Consumer choice is how people select among alternatives given their preferences, income, prices and information. If I choose a nearby gym despite another being cheaper, convenience may be part of the value I compare. Choices are not always perfectly informed, so the simple model is a useful starting point rather than a complete description.", mistakes: ["Assuming only price matters", "Ignoring budget", "Presenting a model as reality"], followUp: "How could information change the choice?", tags: ["economics", "consumer-choice"] }),
  makeInterview({ id: "int-016", institution: "IIM Bangalore", question: "How would you explain a complex idea to a younger student?", tester: "Communication and audience awareness.", structure: ["start with familiar example", "define one term", "check understanding", "add complexity gradually"], illustrativeAnswer: "I would begin with an everyday example, use one clear sentence for the idea and ask the student to explain it back in their own words. Only after that would I add a diagram or a more technical term. Good explanation is about what the listener can use, not how many words I know.", mistakes: ["Reading a definition", "Talking without checking", "Using jargon to sound advanced"], followUp: "How would you respond if they still looked confused?", tags: ["communication", "teaching"] }),
  makeInterview({ id: "int-017", institution: "IIM Bangalore", question: "What is a question you would ask an entrepreneur?", tester: "Quality of curiosity.", structure: ["specific user problem", "evidence", "trade-off", "learning"], illustrativeAnswer: "I would ask which early observation convinced them that the problem was real, and what evidence later changed their mind. That question focuses on users and learning rather than only on the founder's title or revenue story.", mistakes: ["Asking a flattering but empty question", "Assuming success is guaranteed", "Making the question too broad"], followUp: "What answer would make you ask a second question?", tags: ["curiosity", "entrepreneurship"] }),
  makeInterview({ id: "int-018", institution: "IIM Bangalore", question: "What is an example of a trade-off in public policy?", tester: "Ability to recognise competing goals.", structure: ["policy goal", "benefit", "cost", "who is affected"], illustrativeAnswer: "A subsidy can make an important service more affordable, but it also uses public money and may benefit groups differently. I would ask whether the policy reaches the intended people and what alternative use of the money is forgone. The answer should recognise both the benefit and the cost.", mistakes: ["Calling one side always correct", "Ignoring fiscal cost", "Not naming affected groups"], followUp: "What evidence would you seek before judging the policy?", tags: ["policy", "trade-offs"] }),
  makeInterview({ id: "int-019", institution: "IIM Bangalore", question: "What does integrity mean in a student team?", tester: "Ethical conduct in ordinary situations.", structure: ["truthful reporting", "credit", "deadlines", "repair"], illustrativeAnswer: "Integrity means being truthful about what I did and did not finish, giving others credit and raising a problem early. If I make an error, I should explain it, help repair the work and learn from it rather than quietly shifting blame.", mistakes: ["Using only a moral slogan", "Equating integrity with never making mistakes", "Ignoring team impact"], followUp: "What if admitting an error feels embarrassing?", tags: ["integrity", "teamwork"] }),
  makeInterview({ id: "int-020", institution: "IIM Bangalore", question: "How would you test whether a fitness app feature helps users?", tester: "Applied measurement and experiment thinking.", structure: ["outcome", "comparison", "time window", "ethical limit"], illustrativeAnswer: "I would define a useful outcome, such as completing planned sessions, and compare similar users who see the feature with users who do not. I would avoid treating a short-term click as proof of long-term benefit and would handle personal data carefully.", mistakes: ["Measuring only downloads", "Claiming causation from one anecdote", "Ignoring privacy"], followUp: "What could make the comparison unfair?", tags: ["data", "fitness", "experiments"] }),
  makeInterview({ id: "int-021", institution: "IIM Bangalore", question: "What is one thing you want to improve before college?", tester: "Specific growth goal.", structure: ["skill", "current honest level", "practice method", "feedback"], illustrativeAnswer: "I want to improve how clearly I explain quantitative reasoning aloud. I can practise by solving a problem, stating the assumptions, and explaining the steps without hiding behind notation. Feedback from a teacher or friend would show whether the explanation is understandable.", mistakes: ["Choosing a vague goal", "Claiming perfection", "No practice plan"], followUp: "How will you know you improved?", tags: ["growth", "communication"] }),
  makeInterview({ id: "int-022", institution: "IIM Bangalore", question: "Why should a business care about externalities?", tester: "Economic reasoning and stakeholder awareness.", structure: ["define spillover", "business example", "long-term risk", "possible response"], illustrativeAnswer: "An externality is an effect on people who are not fully represented in a transaction. A business that creates noise or pollution may shift costs to neighbours, which can create trust, legal or sustainability problems. Measuring those effects helps the business make better decisions, even when regulation is not immediate.", mistakes: ["Treating only government as responsible", "Confusing externality with any cost", "Ignoring affected people"], followUp: "What is one way to reduce a negative externality?", tags: ["economics", "stakeholders"] }),
  makeInterview({ id: "int-023", institution: "IIM Bangalore", question: "How do you decide whether a source is trustworthy?", tester: "Research discipline.", structure: ["authority", "date", "method", "cross-check"], illustrativeAnswer: "I check who published it, what date and scope it has, whether the method is explained and whether a second reliable source agrees. For admissions or cut-offs I prefer the institution or exam authority's own current page and keep the date I verified it.", mistakes: ["Trusting a polished design", "Using a search snippet as proof", "Ignoring date and scope"], followUp: "What would you do if two official pages differ?", tags: ["research", "source-evaluation"] }),
  makeInterview({ id: "int-024", institution: "IIM Bangalore", question: "What does learning online require from a student?", tester: "Self-management for the actual delivery format.", structure: ["schedule", "active practice", "asking questions", "exam logistics"], illustrativeAnswer: "Online learning requires a routine, active notes and practice instead of passive video watching. I would track deadlines, ask focused questions and plan for any in-person assessment requirements stated by the programme. I would also protect time for revision and rest.", mistakes: ["Assuming online means easy", "Ignoring assessment rules", "Confusing screen time with learning"], followUp: "How would you recover after missing a week?", tags: ["IIMB", "online-learning"] }),
  makeInterview({ id: "int-025", institution: "IIM Bangalore", question: "What would you contribute to a campus community?", tester: "Contribution without invented achievements.", structure: ["real interests", "reliable behaviour", "learning from others", "specific first step"], illustrativeAnswer: "I could contribute as a consistent teammate and as someone interested in fitness and keyboard. I could join activities at a beginner level, help with practice or organisation when I have the time, and learn from people with different strengths. I would rather make a modest, reliable contribution than promise something I cannot sustain.", mistakes: ["Claiming leadership without evidence", "Promising every activity", "Making community only about self"], followUp: "Which contribution would you try first and why?", tags: ["community", "fitness", "keyboard"] }),

  makeInterview({ id: "int-026", institution: "CHRIST (Deemed to be University)", question: "Why BSc Economics at CHRIST?", tester: "Fit with the course and institution, without generic praise.", structure: ["course interest", "learning method", "personal fit", "question to explore"], illustrativeAnswer: "I want a structured economics foundation that connects theory with data and real decisions. CHRIST's course page is the place I would use to verify the current structure and selection details. I would bring curiosity, a steady routine from fitness and a creative interest in keyboard while developing stronger academic habits.", mistakes: ["Inventing course features", "Calling every college the best", "Using hobbies as proof of academic ability"], followUp: "Which economics question would you like to study first?", tags: ["Christ", "course-fit"] }),
  makeInterview({ id: "int-027", institution: "CHRIST (Deemed to be University)", question: "Why not choose only a commerce degree?", tester: "Understanding of academic direction rather than dismissing alternatives.", structure: ["respect alternative", "explain economics interest", "recognise overlap", "personal next step"], illustrativeAnswer: "Commerce and economics overlap in useful ways, but I am especially drawn to questions about incentives, markets and public choices. I would compare the actual curriculum and learning experience rather than assuming a title tells me everything. My goal is to build a strong base and keep options open responsibly.", mistakes: ["Putting down another discipline", "Claiming certainty about a future career", "Not checking curriculum"], followUp: "What common skill would both programmes require?", tags: ["Christ", "academic-choice"] }),
  makeInterview({ id: "int-028", institution: "CHRIST (Deemed to be University)", question: "Define scarcity with an example.", tester: "Core economics concept and application.", structure: ["definition", "limited resource", "choice", "opportunity cost"], illustrativeAnswer: "Scarcity means resources are limited relative to the wants they can satisfy. If I have one evening and want to revise, exercise and practise keyboard, time is scarce and I must choose. The opportunity cost is the next-best activity I give up.", mistakes: ["Calling only money scarce", "Saying scarcity means absolute absence", "Missing choice"], followUp: "Can something be scarce even if it is free?", tags: ["Christ", "economics"] }),
  makeInterview({ id: "int-029", institution: "CHRIST (Deemed to be University)", question: "What is the difference between a positive and normative statement?", tester: "Separating evidence from value judgement.", structure: ["define positive", "define normative", "give examples", "note evidence"], illustrativeAnswer: "A positive statement can be tested against evidence, such as 'a price rise was followed by lower quantity demanded.' A normative statement expresses what ought to happen, such as 'the price should be regulated.' Evidence can inform the second discussion, but it does not by itself settle values.", mistakes: ["Calling positive statements optimistic", "Calling normative statements numerical", "Treating values as facts"], followUp: "Can a policy debate contain both kinds of statement?", tags: ["Christ", "economics"] }),
  makeInterview({ id: "int-030", institution: "CHRIST (Deemed to be University)", question: "What would you do if a graph contradicted your expectation?", tester: "Evidence-led thinking.", structure: ["pause", "check data and definition", "revise hypothesis", "communicate clearly"], illustrativeAnswer: "I would check whether I read the axes, units and time period correctly, then look for measurement or sampling issues. If the data still stand, I would revise my expectation and explain what changed. A contradiction is a reason to investigate, not to delete an inconvenient result.", mistakes: ["Forcing the data to fit", "Assuming the graph is automatically correct", "Not checking definitions"], followUp: "How would you explain uncertainty in the graph?", tags: ["Christ", "data-literacy"] }),
  makeInterview({ id: "int-031", institution: "CHRIST (Deemed to be University)", question: "How does a market reach an equilibrium?", tester: "Basic model expressed in plain language.", structure: ["buyers", "sellers", "price signal", "caveat"], illustrativeAnswer: "In the simple model, buyers and sellers respond to price. If demand is greater than supply, pressure can push price up; if supply is greater, pressure can push price down. Equilibrium is where the quantities planned by buyers and sellers match, although real markets can have information and policy frictions.", mistakes: ["Treating equilibrium as morally ideal", "Saying price changes instantly everywhere", "Ignoring the model's assumptions"], followUp: "What can stop a market from clearing quickly?", tags: ["Christ", "microeconomics"] }),
  makeInterview({ id: "int-032", institution: "CHRIST (Deemed to be University)", question: "What is inflation and why can it matter to students?", tester: "Macroeconomic concept applied without false current data.", structure: ["definition", "purchasing power", "different effects", "verify current rate"], illustrativeAnswer: "Inflation is a sustained rise in the general price level. It can reduce the purchasing power of a fixed allowance or make transport and food budgets harder to plan. The effect differs across households because spending baskets differ, and I would check the current official rate before quoting a number.", mistakes: ["Defining inflation as every price rise", "Inventing a current percentage", "Ignoring different baskets"], followUp: "How is inflation different from a single price increase?", tags: ["Christ", "macroeconomics"] }),
  makeInterview({ id: "int-033", institution: "CHRIST (Deemed to be University)", question: "What do you enjoy outside academics?", tester: "Natural conversation and truthful interests.", structure: ["name fitness and keyboard", "say what each gives you", "show balance", "invite follow-up"], illustrativeAnswer: "I enjoy fitness and playing keyboard. Fitness gives me a routine and a way to notice gradual improvement, while keyboard gives me a creative activity where practice matters. I am still learning, so I would describe the habits honestly rather than present them as formal achievements.", mistakes: ["Turning hobbies into a résumé", "Using a memorised answer", "Inventing performances or awards"], followUp: "Which habit from one activity helps with the other?", tags: ["Christ", "fitness", "keyboard"] }),
  makeInterview({ id: "int-034", institution: "CHRIST (Deemed to be University)", question: "What makes a good economics student?", tester: "Study attitude and intellectual habits.", structure: ["concepts", "evidence", "questions", "ethics"], illustrativeAnswer: "A good economics student learns concepts accurately but also tests them against examples and evidence. They ask what assumption is being used, communicate uncertainty and stay open to changing an argument. Consistency matters more than pretending to know every topic immediately.", mistakes: ["Reducing economics to calculations", "Equating confidence with knowledge", "Ignoring evidence"], followUp: "How would you practise a concept after class?", tags: ["Christ", "study-habits"] }),
  makeInterview({ id: "int-035", institution: "CHRIST (Deemed to be University)", question: "Explain demand and quantity demanded.", tester: "Precision in introductory microeconomics.", structure: ["demand curve meaning", "own-price movement", "shift factors", "example"], illustrativeAnswer: "Demand describes the relationship between price and quantities consumers are willing and able to buy, holding other factors constant. Quantity demanded is the amount chosen at a particular price. A change in own price moves along the curve, while income or taste changes can shift the curve.", mistakes: ["Using demand and quantity demanded interchangeably", "Ignoring willingness and ability", "Calling any sales change a shift"], followUp: "What could shift demand for a keyboard?", tags: ["Christ", "demand"] }),
  makeInterview({ id: "int-036", institution: "CHRIST (Deemed to be University)", question: "What is an externality?", tester: "Ability to identify third-party effects.", structure: ["definition", "positive or negative example", "why markets may miss it", "response"], illustrativeAnswer: "An externality is a cost or benefit from an action that affects a third party and is not fully reflected in the decision. Pollution is a negative example; a well-kept public garden can create benefits for neighbours. Policy or social norms may help account for those spillovers.", mistakes: ["Calling all costs external", "Not naming the third party", "Assuming one solution fits all"], followUp: "Why can measurement be difficult?", tags: ["Christ", "externalities"] }),
  makeInterview({ id: "int-037", institution: "CHRIST (Deemed to be University)", question: "How would you read a simple demand graph?", tester: "Comfort with axes and movement.", structure: ["identify axes", "read point", "distinguish movement", "state assumptions"], illustrativeAnswer: "I would first identify what the horizontal and vertical axes measure and check the units. Then I would read a chosen point and compare it with another point. I would ask whether the graph shows a movement from a price change or a shift caused by another factor.", mistakes: ["Reading axes backwards", "Ignoring units", "Calling every movement a shift"], followUp: "What would a rightward demand shift mean?", tags: ["Christ", "graphs"] }),
  makeInterview({ id: "int-038", institution: "CHRIST (Deemed to be University)", question: "What is the role of mathematics in economics?", tester: "Balanced view of quantitative tools and judgement.", structure: ["clarity", "models", "data", "limits"], illustrativeAnswer: "Mathematics helps express relationships, solve models and analyse data precisely. It does not replace judgement about assumptions, institutions or human behaviour. I want to improve both the calculation and the explanation of what a result means.", mistakes: ["Saying economics is only mathematics", "Saying maths is unnecessary", "Not giving a use"], followUp: "How would you check whether a calculated result makes sense?", tags: ["Christ", "quantitative"] }),
  makeInterview({ id: "int-039", institution: "CHRIST (Deemed to be University)", question: "How can an 18-year-old contribute to a class discussion?", tester: "Preparation and respectful participation.", structure: ["prepare one point", "listen", "ask", "revise"], illustrativeAnswer: "I can prepare one example or question, listen to the other views and connect my comment to the concept being discussed. If someone gives better evidence, I should be willing to revise my view. Contributing does not mean speaking the most.", mistakes: ["Speaking without listening", "Treating discussion as competition", "Being afraid to ask a precise question"], followUp: "What makes a question useful?", tags: ["Christ", "communication"] }),
  makeInterview({ id: "int-040", institution: "CHRIST (Deemed to be University)", question: "What is one ethical issue in using economic data?", tester: "Responsible use of evidence.", structure: ["privacy or bias", "who is affected", "safeguard", "trade-off"], illustrativeAnswer: "A dataset can reveal sensitive patterns about people without them understanding how it will be used. It can also under-represent a group and lead to unfair decisions. I would ask whether collection is justified, protect identity where possible and report limitations honestly.", mistakes: ["Saying anonymisation solves everything", "Ignoring consent", "Confusing a large sample with a fair sample"], followUp: "How should a dashboard show uncertainty?", tags: ["Christ", "ethics", "data"] }),
  makeInterview({ id: "int-041", institution: "CHRIST (Deemed to be University)", question: "How do you respond to feedback?", tester: "Coachability.", structure: ["listen", "clarify", "try a change", "follow up"], illustrativeAnswer: "I try to separate the usefulness of feedback from the discomfort of hearing it. I would ask for a specific example, choose one change to practise and then check whether the next attempt improved. I can disagree respectfully, but I should not dismiss feedback automatically.", mistakes: ["Saying all feedback is correct", "Defending before listening", "Making no change"], followUp: "What if feedback conflicts with another person's feedback?", tags: ["Christ", "growth"] }),
  makeInterview({ id: "int-042", institution: "Both IIM Bangalore and CHRIST", question: "Which social or economic problem would you like to understand better?", tester: "Curiosity grounded in a researchable question.", structure: ["narrow problem", "people affected", "economic lens", "first source or observation"], illustrativeAnswer: "I would like to understand how access and convenience affect who benefits from digital learning or fitness services. I would compare price, connectivity, time and user experience rather than assume technology helps everyone equally. I would begin by reading official evidence and listening to users.", mistakes: ["Choosing an issue only for drama", "Promising to solve it immediately", "No way to investigate"], followUp: "What would count as evidence against your first view?", tags: ["IIMB", "Christ", "research"] }),
  makeInterview({ id: "int-043", institution: "Both IIM Bangalore and CHRIST", question: "What if you are not selected?", tester: "Maturity and realistic resilience.", structure: ["acknowledge disappointment", "review evidence", "continue learning", "avoid entitlement"], illustrativeAnswer: "I would be disappointed, but I would not treat one result as a complete judgement of my potential. I would review what I could improve, continue building my quantitative and communication foundations and make a thoughtful next choice. I would also respect that selection depends on a process I cannot control fully.", mistakes: ["Claiming it would not matter", "Blaming the institution", "Making a guaranteed comeback claim"], followUp: "What would your first practical step be?", tags: ["resilience", "self-awareness"] }),
  makeInterview({ id: "int-044", institution: "Both IIM Bangalore and CHRIST", question: "How would you make a 90-second explanation engaging?", tester: "Structure, clarity and audience awareness.", structure: ["opening hook", "three points", "example", "close with implication"], illustrativeAnswer: "I would start with a question or familiar situation, state the idea in one sentence and use three short points. I would include one example rather than several unrelated facts, then close by saying why the idea matters. I would practise timing so the conclusion is not rushed.", mistakes: ["Starting with a long definition", "Packing in too many facts", "No conclusion"], followUp: "How would you adjust it for a younger audience?", tags: ["presentation", "communication"] }),
  makeInterview({ id: "int-045", institution: "Both IIM Bangalore and CHRIST", question: "What should an interviewer remember about you?", tester: "Authenticity and concise self-positioning.", structure: ["one academic direction", "one personal habit", "one learning attitude", "no exaggerated claim"], illustrativeAnswer: "I hope the interviewer remembers that I am seriously curious about economics and business questions, that fitness has made consistency meaningful to me, and that keyboard reminds me that improvement comes from patient practice. I am still forming my direction, so I would rather be honest and teachable than sound certain about everything.", mistakes: ["Turning the answer into a slogan", "Adding unverified achievements", "Trying to sound older than you are"], followUp: "What are you currently doing to become more teachable?", tags: ["closing", "authenticity", "fitness", "keyboard"] })
]);

const makePresentation = ({
  id,
  title,
  simpleExplanation,
  opening,
  threePoints,
  verifiedFactExample,
  factStatus,
  conclusion,
  followUps
}) => ({
  id,
  title,
  simpleExplanation,
  opening,
  threePoints,
  ...(verifiedFactExample ? { verifiedFactExample } : { factStatus }),
  conclusion,
  followUps,
  formatNote: "90 seconds: 10 seconds for the opening, 55 seconds for three points, 15 seconds for the example, and 10 seconds for the conclusion."
});

export const PRESENTATION_TOPICS = Object.freeze([
  makePresentation({ id: "pres-001", title: "Why opportunity cost matters", simpleExplanation: "Every choice uses scarce time or resources and gives up the next-best alternative.", opening: "If I choose one use of my evening, what am I giving up?", threePoints: ["define the next-best alternative", "show a student routine example", "explain why the cost changes with context"], verifiedFactExample: "Opportunity cost is the value of the next-best alternative forgone.", conclusion: "Thinking about the forgone alternative makes decisions more transparent.", followUps: ["Can a free activity have an opportunity cost?", "How would you compare two study plans?"] }),
  makePresentation({ id: "pres-002", title: "Demand in everyday life", simpleExplanation: "Demand is the willingness and ability to buy at different prices, with other factors held constant.", opening: "Why might the same person buy more fruit when the price falls?", threePoints: ["separate demand from quantity demanded", "explain own-price movement", "mention income, taste and substitutes as shift factors"], verifiedFactExample: "A movement along a demand curve follows a change in the good's own price, while a shift comes from another determinant.", conclusion: "The model is useful when its assumptions are stated clearly.", followUps: ["What could shift demand for keyboard lessons?", "What is a substitute?"] }),
  makePresentation({ id: "pres-003", title: "Elasticity for a small business", simpleExplanation: "Elasticity measures how strongly quantity responds to a change in price or another factor.", opening: "Would a price cut always increase a shop's revenue?", threePoints: ["define responsiveness", "contrast elastic and inelastic demand", "connect price decisions to revenue and customer alternatives"], verifiedFactExample: "Demand is elastic when the percentage change in quantity is larger than the percentage change in price.", conclusion: "A business should ask how customers can respond before changing price.", followUps: ["What makes a product more elastic?", "Why do necessities often have fewer substitutes?"] }),
  makePresentation({ id: "pres-004", title: "Positive and negative externalities", simpleExplanation: "Externalities are spillover effects on people outside a transaction.", opening: "Who bears the cost of noise from a venue?", threePoints: ["define spillover", "give one benefit and one cost", "explain why private decisions may miss third-party effects"], verifiedFactExample: "Pollution is a standard example of a negative externality because it can impose unpriced costs on others.", conclusion: "Good decisions count effects on people who are not at the negotiating table.", followUps: ["What could reduce the external cost?", "Can a benefit be an externality?"] }),
  makePresentation({ id: "pres-005", title: "Public goods", simpleExplanation: "Public goods are typically non-rival and difficult to exclude people from using.", opening: "Can one person's use of a streetlight stop another person's use?", threePoints: ["define non-rivalry", "define non-excludability", "explain why free-riding creates a funding challenge"], verifiedFactExample: "Streetlight illumination is often used as an illustrative public-good example because exclusion is difficult.", conclusion: "The concept helps explain why some services need collective arrangements.", followUps: ["Is every government service a public good?", "What is free-riding?"] }),
  makePresentation({ id: "pres-006", title: "Inflation and purchasing power", simpleExplanation: "Inflation is a sustained rise in the general price level, so a fixed cash amount may buy less.", opening: "Why can the same allowance feel smaller over time?", threePoints: ["define general price level", "distinguish one price rise", "explain why different households feel it differently"], verifiedFactExample: "A fixed nominal amount buys fewer units of goods when the overall price level rises.", conclusion: "Inflation is about broad and sustained price movement, not one expensive item.", followUps: ["Why should a current rate be checked before quoting it?", "What is a real value?"] }),
  makePresentation({ id: "pres-007", title: "Digital platforms and trust", simpleExplanation: "A platform helps different groups interact, often using data and rules to coordinate them.", opening: "Why does a marketplace need rules if buyers and sellers can meet online?", threePoints: ["identify the two-sided interaction", "explain network effects", "show privacy, quality and competition risks"], verifiedFactExample: "A platform's usefulness can increase when more participants make matching easier, but this is not guaranteed.", conclusion: "Digital scale creates value only when trust and participation are maintained.", followUps: ["What would make users leave?", "How would you measure trust?"] }),
  makePresentation({ id: "pres-008", title: "Data is not automatically evidence", simpleExplanation: "Numbers need context, definitions and a method before they can support a conclusion.", opening: "Can a large number be misleading?", threePoints: ["check what was measured", "check who was included", "separate correlation from causation"], verifiedFactExample: "Correlation alone does not establish that one variable caused another.", conclusion: "Good analysis asks how data were produced, not only what the headline says.", followUps: ["What would you check in a survey?", "Why does a proxy sometimes fail?"] }),
  makePresentation({ id: "pres-009", title: "Fitness as a lesson in incentives", simpleExplanation: "A routine shows how goals, feedback and constraints affect behaviour.", opening: "Why do good intentions sometimes fail to become habits?", threePoints: ["define a practical goal", "use feedback without obsessing over one number", "adjust the environment and routine"], verifiedFactExample: "A measurable target makes it easier to compare intended and actual behaviour, but the target must represent the real goal.", conclusion: "The useful lesson is disciplined iteration, not a perfect routine.", followUps: ["What is a bad proxy for fitness?", "How can incentives backfire?"] }),
  makePresentation({ id: "pres-010", title: "Learning keyboard and deliberate practice", simpleExplanation: "Skill improves when practice targets a specific gap and includes feedback.", opening: "Why does repeating a song sometimes stop producing improvement?", threePoints: ["break the task into sections", "slow down difficult parts", "review and change the next practice session"], verifiedFactExample: "Feedback helps a learner compare the intended result with the actual result.", conclusion: "Small, focused practice is more informative than simply counting hours.", followUps: ["How would you measure progress?", "What is the opportunity cost of practice time?"] }),
  makePresentation({ id: "pres-011", title: "The economics of a healthy meal", simpleExplanation: "Food choices combine prices, time, preferences, information and health effects.", opening: "Why might a cheaper meal not be the lowest-cost choice?", threePoints: ["separate price from total cost", "include time and convenience", "consider health effects and information"], verifiedFactExample: "A consumer's budget constraint depends on income and prices, while preferences determine what they value among affordable bundles.", conclusion: "Everyday choices are economic even when no money changes hands immediately.", followUps: ["What is the opportunity cost?", "Which effect is private and which could be social?"] }),
  makePresentation({ id: "pres-012", title: "Price ceilings and shortages", simpleExplanation: "A binding maximum price below equilibrium can create more demand than supply.", opening: "What happens when a legal price is kept below the market-clearing level?", threePoints: ["define a binding ceiling", "trace buyer and seller responses", "mention non-price allocation and quality risks"], verifiedFactExample: "In the simple model, a price ceiling below equilibrium creates excess demand.", conclusion: "A price rule changes incentives and may create a new allocation problem.", followUps: ["What is a price floor?", "Who might benefit and who might be left out?"] }),
  makePresentation({ id: "pres-013", title: "Price floors and labour markets", simpleExplanation: "A binding minimum price above equilibrium can create a surplus of supply.", opening: "Why can a higher legal wage help some workers but make jobs harder to find for others?", threePoints: ["define a price floor", "apply it to labour", "state the simple model's assumptions"], verifiedFactExample: "In the basic competitive model, a binding minimum wage above equilibrium creates excess supply of labour.", conclusion: "Policy evaluation should examine both intended and possible unintended effects.", followUps: ["What evidence would you want?", "Why might a real labour market differ from the model?"] }),
  makePresentation({ id: "pres-014", title: "Comparative advantage", simpleExplanation: "People or countries can gain from specialisation when they face different opportunity costs.", opening: "Can trade help both sides even if one side is better at making everything?", threePoints: ["define opportunity cost", "compare relative rather than absolute efficiency", "explain specialisation and trade"], verifiedFactExample: "Comparative advantage is based on lower opportunity cost, not necessarily higher absolute productivity.", conclusion: "The idea shows why trade can be mutually beneficial under suitable conditions.", followUps: ["What assumption would you question?", "Can adjustment costs matter?"] }),
  makePresentation({ id: "pres-015", title: "Human capital", simpleExplanation: "Human capital is the knowledge, skill and experience embodied in people.", opening: "Why can learning change future choices as well as today's test score?", threePoints: ["define skills and knowledge", "connect education to productivity", "mention unequal access and uncertainty"], verifiedFactExample: "Training is an investment because it uses resources now in the hope of future benefits.", conclusion: "Human capital links individual learning with wider economic outcomes.", followUps: ["What is the opportunity cost of training?", "How would you measure quality rather than years?"] }),
  makePresentation({ id: "pres-016", title: "GDP and its limits", simpleExplanation: "GDP measures the market value of final production within an economy over a period, but it is not a complete welfare measure.", opening: "Can a country produce more and still leave important questions unanswered?", threePoints: ["define final production", "distinguish nominal and real GDP", "name distribution, unpaid work and environment as limits"], verifiedFactExample: "Real GDP adjusts for price changes so that output comparisons focus more on quantities.", conclusion: "GDP is useful evidence, not a full description of people's well-being.", followUps: ["Why exclude intermediate goods?", "What should complement GDP?"] }),
  makePresentation({ id: "pres-017", title: "A simple circular flow", simpleExplanation: "Households and firms exchange resources, income and goods or services.", opening: "How does a wage become spending and then business revenue?", threePoints: ["map households and firms", "show factor payments", "explain leakages and injections simply"], verifiedFactExample: "In the basic model, households supply factors and receive income while firms produce goods and services.", conclusion: "The circular flow makes the links between production, income and spending visible.", followUps: ["Where does saving enter?", "How would government fit into the model?"] }),
  makePresentation({ id: "pres-018", title: "Fiscal and monetary policy", simpleExplanation: "Fiscal policy uses public spending and taxes; monetary policy influences money and credit conditions.", opening: "Who can change the conditions under which households and firms borrow or spend?", threePoints: ["define fiscal tools", "define monetary tools", "explain transmission and trade-offs"], factStatus: "verify-before-use", conclusion: "The two policy families can affect demand but should not be treated as identical.", followUps: ["Which institution sets the policy rate?", "Why can policy effects take time?"] }),
  makePresentation({ id: "pres-019", title: "Why averages can mislead", simpleExplanation: "A mean summarises data but can hide distribution and outliers.", opening: "Can two groups have the same average but very different experiences?", threePoints: ["calculate a mean", "show how an outlier pulls it", "compare median and spread"], verifiedFactExample: "The mean is sensitive to extreme observations, while the median is usually more resistant.", conclusion: "A good summary uses the measure that fits the question.", followUps: ["When is the median better?", "What does the range show?"] }),
  makePresentation({ id: "pres-020", title: "Sampling and fairness", simpleExplanation: "A sample should give relevant members a fair chance of representation for the question being studied.", opening: "Why can asking the easiest people to reach distort a survey?", threePoints: ["define population and sample", "explain selection bias", "compare a convenience sample with a probability approach"], verifiedFactExample: "A convenience sample may not represent the wider population because inclusion depends on ease of access.", conclusion: "Better sampling improves what a survey can responsibly claim.", followUps: ["Is a larger biased sample enough?", "What would a subgroup check reveal?"] }),
  makePresentation({ id: "pres-021", title: "Correlation versus causation", simpleExplanation: "Two variables moving together does not prove that one caused the other.", opening: "If two trends rise together, what else should we ask?", threePoints: ["define correlation", "name confounders and reverse causality", "describe a comparison or experiment"], verifiedFactExample: "A causal claim needs a credible explanation and evidence that rules out important alternatives.", conclusion: "Careful language protects a good observation from becoming a bad claim.", followUps: ["What would be a confounder here?", "Why is randomisation helpful?"] }),
  makePresentation({ id: "pres-022", title: "Sustainable development", simpleExplanation: "Sustainable development considers present needs while protecting future choices and resources.", opening: "What does a decision cost people who are not yet in the room?", threePoints: ["define intergenerational perspective", "connect environment and livelihoods", "explain trade-offs and measurement"], verifiedFactExample: "The common definition focuses on meeting present needs without compromising future generations' ability to meet theirs.", conclusion: "Sustainability is a decision framework, not just a slogan about nature.", followUps: ["Which costs are hard to measure?", "How can technology help and harm?"] }),
  makePresentation({ id: "pres-023", title: "Financial literacy for a student", simpleExplanation: "Financial literacy means understanding income, spending, saving, borrowing and risk well enough to choose responsibly.", opening: "Why is a low monthly payment not always a low total cost?", threePoints: ["compare total and periodic cost", "understand interest and compounding", "keep an emergency buffer and verify terms"], verifiedFactExample: "Simple interest is calculated on the original principal, while compound interest also credits interest on accumulated interest.", conclusion: "Small numerical checks can prevent large misunderstandings.", followUps: ["What question would you ask before borrowing?", "What is risk capacity?"] }),
  makePresentation({ id: "pres-024", title: "Entrepreneurship and evidence", simpleExplanation: "An idea becomes a stronger venture hypothesis when it is tested with real users and clear measures.", opening: "How can a founder learn before building the expensive version?", threePoints: ["define the user problem", "run a small test", "learn from negative evidence"], verifiedFactExample: "A pilot can provide evidence about a specific assumption, but its result may not generalise automatically.", conclusion: "Entrepreneurship rewards learning speed as well as imagination.", followUps: ["What would you measure first?", "When would you stop testing?" ] }),
  makePresentation({ id: "pres-025", title: "The economics of attention", simpleExplanation: "Attention is scarce, and digital products compete for it using design, notifications and personalisation.", opening: "Why does a free app still have an economic model?", threePoints: ["treat attention as a scarce resource", "identify user and business incentives", "discuss well-being and informed choice"], factStatus: "verify-before-use", conclusion: "A useful digital service should create value without hiding the cost of attention.", followUps: ["What is the opportunity cost of a notification?", "How could a user regain control?"] }),
  makePresentation({ id: "pres-026", title: "Why official sources matter", simpleExplanation: "Source quality depends on authority, date, scope, method and fit for the claim.", opening: "Would you use a random post to decide an application deadline?", threePoints: ["prefer the institution for its own rule", "record verification date", "separate fact from interpretation"], verifiedFactExample: "An admissions page is the appropriate primary source for that institution's published eligibility and process.", conclusion: "Good preparation includes knowing what to verify and when.", followUps: ["What if an official page changes?", "Why should current statistics be dated?"] }),
  makePresentation({ id: "pres-027", title: "Choice architecture", simpleExplanation: "The way options are arranged can influence decisions without changing the options themselves.", opening: "Does the first button you see affect what you choose?", threePoints: ["define defaults and presentation", "show convenience and attention", "discuss autonomy and transparency"], verifiedFactExample: "A default option can influence behaviour because changing it requires an active step.", conclusion: "Design can help people, but it should not exploit confusion.", followUps: ["When is a default helpful?", "How would you test for manipulation?"] }),
  makePresentation({ id: "pres-028", title: "Inequality and opportunity", simpleExplanation: "Inequality concerns how resources or outcomes are distributed, while opportunity asks whether people can access pathways.", opening: "Is equal treatment always enough for equal opportunity?", threePoints: ["distinguish outcomes and opportunities", "name access constraints", "consider measurement and policy trade-offs"], factStatus: "verify-before-use", conclusion: "A careful discussion identifies both the distribution and the mechanisms behind it.", followUps: ["Which measure would you choose?", "How can policy create new trade-offs?"] }),
  makePresentation({ id: "pres-029", title: "Behavioural economics in a cafeteria", simpleExplanation: "People may use shortcuts and respond to framing rather than making perfectly calculated choices.", opening: "Would moving fruit to eye level change what people pick?", threePoints: ["contrast simple rational model with heuristics", "explain framing and defaults", "state that effects need testing"], verifiedFactExample: "A nudge changes the choice environment while keeping options available, though its effect is context-dependent.", conclusion: "Small design choices can matter, so they should be transparent and evaluated.", followUps: ["Can a nudge be harmful?", "How would you measure the effect?"] }),
  makePresentation({ id: "pres-030", title: "The role of competition", simpleExplanation: "Competition can pressure firms to improve price, quality or innovation, but market conditions matter.", opening: "Why might having more than one seller change a buyer's experience?", threePoints: ["explain rivalry", "mention information and barriers to entry", "recognise possible limits"], verifiedFactExample: "A monopoly has one seller, while a competitive market has multiple sellers; real markets can fall between simple textbook cases.", conclusion: "Competition is a mechanism, not a guarantee of every good outcome.", followUps: ["What is a barrier to entry?", "Can competition reduce quality?"] }),
  makePresentation({ id: "pres-031", title: "A 90-second data story", simpleExplanation: "A short data story connects one question, one pattern, one caveat and one implication.", opening: "What is the single decision this chart should inform?", threePoints: ["state the question and measure", "describe the pattern without exaggeration", "give a caveat and implication"], verifiedFactExample: "A chart's conclusion depends on axes, units, time period and the population represented.", conclusion: "Clarity comes from selecting the evidence that serves the decision.", followUps: ["What would you verify next?", "What alternative explanation exists?"] }),
  makePresentation({ id: "pres-032", title: "My learning system", simpleExplanation: "A learning system turns goals into practice, feedback, review and adjustment.", opening: "How do you know whether studying worked?", threePoints: ["set a specific outcome", "retrieve and explain rather than reread only", "review mistakes and schedule the next attempt"], verifiedFactExample: "Feedback is useful when it identifies a gap between the intended performance and the observed performance.", conclusion: "A repeatable learning loop is more useful than a one-time burst of effort.", followUps: ["How does fitness reinforce a routine?", "How could keyboard practice teach patience?"] })
]);

const lessonQuiz = (question, answer, explanation) => ({ question, answer, explanation });

export const ECONOMICS_LESSONS = Object.freeze([
  {
    id: "econ-lesson-01",
    title: "Scarcity, choice and opportunity cost",
    simpleExplanation: "Resources such as time, money and attention are limited, so every choice has a trade-off. Opportunity cost is the value of the next-best alternative given up.",
    everydayExample: "If Ayush spends an hour on keyboard practice instead of revision, the next-best use of that hour is the opportunity cost. It is not automatically every possible activity.",
    interactionPrompt: "Ask Ayush to name two possible uses of one free evening and identify the next-best alternative for each choice.",
    quiz: [
      lessonQuiz("What is scarcity?", "Resources are limited relative to wants.", "Scarcity creates the need to choose; it does not mean a resource is completely absent."),
      lessonQuiz("What is opportunity cost?", "The value of the next-best alternative forgone.", "The next-best alternative is more precise than listing every alternative."),
      lessonQuiz("Can a free activity have an opportunity cost?", "Yes, because it can use scarce time that could have been used elsewhere.", "Opportunity cost is about forgone alternatives, not only money."),
      lessonQuiz("Why does opportunity cost vary between people?", "People have different alternatives, constraints and values.", "The next-best alternative depends on the decision-maker and situation."),
      lessonQuiz("What question reveals a hidden trade-off?", "What is the best alternative I am giving up?", "That question makes the cost of a choice visible.")
    ]
  },
  {
    id: "econ-lesson-02",
    title: "Demand and consumer choice",
    simpleExplanation: "Demand describes how much people are willing and able to buy at different prices, holding other relevant factors constant.",
    everydayExample: "A student may choose a nearby gym over a cheaper distant gym because convenience, time and perceived benefit are part of the choice.",
    interactionPrompt: "Give two possible keyboard options and ask which price, quality, time and preference factors could change the choice.",
    quiz: [
      lessonQuiz("What is quantity demanded?", "The amount consumers choose at a particular price.", "It is a point or amount at a given price, not the whole relationship."),
      lessonQuiz("What causes movement along a demand curve?", "A change in the good's own price, with other factors held constant.", "Income or taste changes usually shift the curve instead."),
      lessonQuiz("What is a substitute?", "A good that can serve a similar purpose and be chosen instead.", "More attractive substitutes can reduce demand for the original good."),
      lessonQuiz("What is a normal good?", "A good whose demand tends to rise as income rises, other things equal.", "This is a relationship, not a claim that every purchase rises for every person."),
      lessonQuiz("Why do willingness and ability both matter?", "Wanting a product without being able to pay does not create effective market demand.", "Market demand concerns choices supported by purchasing power.")
    ]
  },
  {
    id: "econ-lesson-03",
    title: "Supply and production decisions",
    simpleExplanation: "Supply describes how much sellers are willing and able to offer at different prices, given costs, technology and other conditions.",
    everydayExample: "A home baker may offer more items when the selling price covers ingredients, time and equipment costs, but capacity still limits output.",
    interactionPrompt: "Ask which changes would make a small business supply more: better technology, higher input costs or a higher selling price.",
    quiz: [
      lessonQuiz("What is quantity supplied?", "The amount sellers offer at a particular price.", "It is distinct from the complete supply relationship."),
      lessonQuiz("What does an improvement in technology usually do to supply?", "It can shift supply right by lowering unit costs or raising productive capacity.", "The exact effect depends on how the technology changes production."),
      lessonQuiz("What happens if an input becomes more expensive?", "Supply may shift left because production becomes less profitable at each price.", "The business compares expected revenue with higher cost."),
      lessonQuiz("What is fixed capacity?", "A limit on output in the relevant period that cannot be changed quickly.", "Short-run capacity can matter even when demand is high."),
      lessonQuiz("Why can supply be upward sloping?", "Higher prices can make additional production worthwhile despite rising marginal costs.", "The simple model connects price incentives with seller willingness.")
    ]
  },
  {
    id: "econ-lesson-04",
    title: "Equilibrium and price controls",
    simpleExplanation: "Equilibrium is where planned quantity demanded equals planned quantity supplied. A binding price rule can prevent the market from clearing.",
    everydayExample: "If a legal maximum rent is set below the market-clearing rent, more people may want homes than landlords are willing to offer.",
    interactionPrompt: "Draw supply and demand, then ask what happens when a price ceiling is above equilibrium versus below it.",
    quiz: [
      lessonQuiz("What is market equilibrium?", "A price and quantity where quantity demanded equals quantity supplied.", "It is a matching condition, not a claim that the outcome is fair."),
      lessonQuiz("What is a binding price ceiling?", "A maximum legal price set below the equilibrium price.", "A ceiling above equilibrium does not constrain the simple market outcome."),
      lessonQuiz("What does a binding price ceiling create in the simple model?", "A shortage or excess demand.", "At the lower price, buyers want more while sellers offer less."),
      lessonQuiz("What is a price floor?", "A minimum legal price.", "It becomes binding when set above equilibrium in the basic model."),
      lessonQuiz("Why can non-price allocation appear?", "When price cannot balance demand and supply, queues or other selection rules may emerge.", "Scarcity remains even when the legal price is low.")
    ]
  },
  {
    id: "econ-lesson-05",
    title: "Elasticity and responsiveness",
    simpleExplanation: "Elasticity measures how strongly one variable responds in percentage terms to another variable's change.",
    everydayExample: "Demand for a product with many close alternatives may fall noticeably after a small price rise.",
    interactionPrompt: "Give a 10% price increase and two quantity responses, then ask which demand is more elastic and why.",
    quiz: [
      lessonQuiz("When is demand elastic?", "When the percentage change in quantity demanded is larger than the percentage change in price.", "Elasticity above one indicates more-than-proportionate response."),
      lessonQuiz("What makes demand more elastic?", "More substitutes, more time to adjust and a larger share of budget can increase responsiveness.", "These are common determinants, not universal rules in every context."),
      lessonQuiz("What does inelastic demand mean?", "Quantity responds less than proportionately to price.", "Consumers may have few alternatives or consider the item necessary."),
      lessonQuiz("Why use percentages?", "They allow comparisons across variables measured in different units or scales.", "A percentage response is more comparable than raw units alone."),
      lessonQuiz("What should a business ask before changing price?", "How will customers respond and how will total revenue change?", "Price movement affects both price per unit and units sold.")
    ]
  },
  {
    id: "econ-lesson-06",
    title: "Externalities and public goods",
    simpleExplanation: "Externalities are spillover costs or benefits affecting third parties. Public goods are typically non-rival and difficult to exclude people from using.",
    everydayExample: "Noise from a venue can impose a cost on neighbours, while a streetlight can illuminate a shared public space.",
    interactionPrompt: "Ask whether each example affects only the buyer and seller or also people outside the transaction.",
    quiz: [
      lessonQuiz("What is a negative externality?", "An unpriced cost imposed on a third party.", "Pollution and noise are common examples."),
      lessonQuiz("What is a positive externality?", "An unpriced benefit received by a third party.", "Vaccination and some education benefits can spill over to others."),
      lessonQuiz("What does non-rival mean?", "One person's use does not substantially reduce another person's ability to use it.", "Rival goods are depleted or crowded by use."),
      lessonQuiz("What does non-excludable mean?", "It is difficult or costly to prevent non-payers from using the good.", "The definition concerns access, not whether the good is valuable."),
      lessonQuiz("Why might policy respond to pollution?", "Private decisions may ignore social costs, so a policy can align incentives more closely with them.", "The appropriate response depends on measurement, enforcement and trade-offs.")
    ]
  },
  {
    id: "econ-lesson-07",
    title: "GDP, real output and inflation",
    simpleExplanation: "GDP tracks the market value of final production within an economy over a period. Real GDP adjusts for price changes; inflation is a sustained rise in the general price level.",
    everydayExample: "If a café sells the same number of meals at higher prices, nominal sales rise even if real output does not rise by the same amount.",
    interactionPrompt: "Ask whether a rise in sales value came from more items, higher prices or both.",
    quiz: [
      lessonQuiz("What does GDP count?", "The market value of final goods and services produced within a country over a period.", "Final goods are counted to avoid double-counting intermediate inputs."),
      lessonQuiz("Why is real GDP useful?", "It adjusts for price changes to make output comparisons more meaningful.", "Nominal values mix quantity and price changes."),
      lessonQuiz("What is inflation?", "A sustained increase in the general price level.", "A single product's price rise is not by itself economy-wide inflation."),
      lessonQuiz("What happens to purchasing power when prices rise and cash is fixed?", "The cash buys fewer goods or services.", "Purchasing power is the real quantity that money can command."),
      lessonQuiz("What does GDP not fully measure?", "Distribution, unpaid work, quality of life and many environmental effects.", "GDP is useful production information, not a complete welfare index.")
    ]
  },
  {
    id: "econ-lesson-08",
    title: "Fiscal and monetary policy",
    simpleExplanation: "Fiscal policy uses government spending and taxation. Monetary policy influences money, interest rates and credit conditions through a central bank framework.",
    everydayExample: "A change in the cost of borrowing can affect whether a household postpones a purchase or a firm expands capacity.",
    interactionPrompt: "Ask Ayush to classify spending, tax and policy-rate examples before discussing how each could influence demand.",
    quiz: [
      lessonQuiz("What is fiscal policy?", "Use of government spending, taxation and related budget tools.", "It is associated with the public budget."),
      lessonQuiz("What is monetary policy concerned with?", "Money and credit conditions, including policy interest rates in many systems.", "The exact operating framework depends on the central bank and country."),
      lessonQuiz("How can a higher lending rate affect borrowing?", "It can make borrowing more expensive and reduce the incentive to take a loan.", "Actual behaviour also depends on expectations and alternatives."),
      lessonQuiz("Why can policy effects take time?", "Households, firms and financial markets adjust at different speeds.", "A policy announcement and its full economic effect need not occur simultaneously."),
      lessonQuiz("Why should current policy claims be verified?", "Institutions, rates and rules can change by date and jurisdiction.", "Use the current official source before quoting a live policy detail.")
    ]
  },
  {
    id: "econ-lesson-09",
    title: "Trade and comparative advantage",
    simpleExplanation: "Comparative advantage means producing a good at a lower opportunity cost than another producer. Specialisation can allow mutually beneficial exchange under suitable conditions.",
    everydayExample: "Two students may both be able to make slides and solve calculations, but each can specialise where their forgone alternative is smaller and then exchange help.",
    interactionPrompt: "Give two people two tasks and ask them to calculate what each gives up when doing one extra unit.",
    quiz: [
      lessonQuiz("What determines comparative advantage?", "Relative opportunity cost.", "It is not the same as being absolutely best at producing everything."),
      lessonQuiz("What is specialisation?", "Focusing more on activities where the relative cost is lower.", "Specialisation can increase total output when coordinated with exchange."),
      lessonQuiz("What does a trade surplus mean?", "Exports exceed imports over the measured period.", "The definition compares the value of exports and imports."),
      lessonQuiz("Why are gains from trade not automatically equal?", "Bargaining power, adjustment costs and distribution can affect who gains and who bears costs.", "Total gains and individual distribution are separate questions."),
      lessonQuiz("What should a trade argument check?", "The assumptions, affected workers or consumers and evidence about adjustment.", "A simple model is a starting lens, not a complete policy answer.")
    ]
  },
  {
    id: "econ-lesson-10",
    title: "Data, averages and economic decisions",
    simpleExplanation: "Economic reasoning uses data summaries, but a measure is useful only when it fits the question and its limits are understood.",
    everydayExample: "A gym's average attendance can rise even if a small group attends much more while many members stop coming, so median, spread and retention may matter too.",
    interactionPrompt: "Show a five-value dataset with an outlier and ask which summary should be reported and why.",
    quiz: [
      lessonQuiz("What is the mean?", "Total of the observations divided by their count.", "The mean uses every value and can be pulled by outliers."),
      lessonQuiz("What is the median?", "The middle value after ordering the data, or the average of the two middle values when the count is even.", "It is often less affected by extreme observations."),
      lessonQuiz("What does correlation show?", "A pattern of variables moving together, not proof of causation.", "An omitted variable or reverse direction may explain the pattern."),
      lessonQuiz("What is a representative sample?", "A sample whose relevant composition and selection process support the intended population claim.", "A large sample can still be biased."),
      lessonQuiz("What makes a data conclusion responsible?", "Clear definitions, appropriate measurement, stated limits and cautious causal language.", "Good analysis says what the data can and cannot establish.")
    ]
  }
]);

const COLLEGE_PRACTICE_LABEL =
  "AI-created practice question. Original readiness material, not an official question, past paper or published selection guidance.";

const collegePracticeQuestion = ({
  id,
  prompt,
  options,
  answerIndex,
  explanation,
  whyWrong
}) => ({
  id,
  prompt,
  options,
  answerIndex,
  answer: options[answerIndex],
  explanation,
  contentLabel: COLLEGE_PRACTICE_LABEL,
  whyWrong
});

export const COLLEGE_PREP = Object.freeze({
  "nm-bcom-economics": {
    collegeId: "nm-bcom-economics",
    title: "NM B.Com (Economics): merit and application readiness",
    moduleStatus: "merit-and-application-readiness",
    confirmed: [
      "The official NM College undergraduate admissions page lists B.Com (Economics).",
      "The official page uses merit-by-Class-XII language; this module does not invent an entrance test or hard-code a merit threshold."
    ],
    verifyNext: [
      "Read the live NM College undergraduate admissions page for the current form dates, eligibility wording, merit notice and category instructions.",
      "Confirm the application portal, document list and any programme-specific instructions immediately before submitting."
    ],
    dailyPlan: [
      "15 minutes: keep an application tracker with the official URL, verification date and unresolved questions.",
      "20 minutes: organise Class XII marks information and identity or category documents without changing or embellishing any detail.",
      "20 minutes: practise a truthful answer to why B.Com (Economics) fits your interests, using one real example.",
      "10 minutes: check the live official notice for changes instead of relying on an old screenshot or message."
    ],
    checklist: [
      "I have saved the current official admissions page and its verification date.",
      "I know which academic record and documents the current notice asks me to provide.",
      "I have not assumed a cutoff, rank, seat count or entrance test that the current notice does not state.",
      "I can explain my interest in economics and commerce in my own words.",
      "I will review every form field and uploaded document before final submission."
    ],
    practiceQuestions: [
      collegePracticeQuestion({
        id: "nm-bcom-economics-prep-01",
        prompt: "The official NM page describes admission using merit-by-Class-XII language. What is the safest preparation conclusion?",
        options: [
          "Prepare for a guaranteed national entrance test",
          "Track the current academic-merit notice and its instructions",
          "Use a remembered cutoff as the application rule",
          "Assume every applicant will receive the same outcome"
        ],
        answerIndex: 1,
        explanation: "The source language points to checking the current academic-merit process. It does not justify inventing an exam, cutoff or guaranteed outcome.",
        whyWrong: [
          "The official note does not establish a national entrance test for this route.",
          "A remembered cutoff may belong to another cycle and is not a substitute for the live notice.",
          "Merit decisions and application outcomes are not guaranteed to be identical for every applicant."
        ]
      }),
      collegePracticeQuestion({
        id: "nm-bcom-economics-prep-02",
        prompt: "You find an old social-media post with a merit percentage. What should you do first?",
        options: [
          "Treat it as the current official rule",
          "Forward it to every applicant",
          "Check the current NM College notice and record the date you verified it",
          "Add a few points to be safe and use that as a fact"
        ],
        answerIndex: 2,
        explanation: "Admissions details can be cycle-specific, so the current institutional notice should be checked and dated before it is used.",
        whyWrong: [
          "An old or unofficial post does not establish the current rule.",
          "Forwarding unverified information can spread an incorrect application claim.",
          "Changing a number turns uncertainty into a fabricated fact."
        ]
      }),
      collegePracticeQuestion({
        id: "nm-bcom-economics-prep-03",
        prompt: "Which application habit best reduces avoidable errors?",
        options: [
          "Submit as soon as possible without reviewing documents",
          "Use a checklist for dates, fields, files and final confirmation",
          "Copy another student's personal details",
          "Leave uncertain fields blank without checking instructions"
        ],
        answerIndex: 1,
        explanation: "A dated checklist makes it easier to catch missing fields, incorrect files and deadlines before submission.",
        whyWrong: [
          "Speed without review increases the chance of a preventable mistake.",
          "Another applicant's details are not your information and create an integrity problem.",
          "An uncertain field should be clarified from the official instructions, not silently ignored."
        ]
      }),
      collegePracticeQuestion({
        id: "nm-bcom-economics-prep-04",
        prompt: "A strong answer to ‘Why B.Com (Economics)?’ should primarily:",
        options: [
          "Promise a guaranteed salary",
          "Repeat the college name without explaining fit",
          "Connect a genuine interest to what you want to learn",
          "Claim achievements that are difficult to verify"
        ],
        answerIndex: 2,
        explanation: "A useful application response explains a truthful academic interest and the learning fit without making guarantees or invented claims.",
        whyWrong: [
          "A guaranteed salary is not an honest or supportable admissions claim.",
          "Repeating a name does not show why the programme fits the applicant.",
          "Unverified achievements weaken credibility and should not be added for effect."
        ]
      }),
      collegePracticeQuestion({
        id: "nm-bcom-economics-prep-05",
        prompt: "If your marks document and application draft show different spellings of your name, the best next step is to:",
        options: [
          "Ignore it because the difference is small",
          "Change the official document yourself",
          "Check the official instructions and seek the appropriate correction route",
          "Submit both versions and hope the system resolves it"
        ],
        answerIndex: 2,
        explanation: "Identity mismatches should be resolved through the institution's stated correction or support process rather than improvised changes.",
        whyWrong: [
          "A small spelling difference can still delay verification or create confusion.",
          "Official records should not be altered by the applicant.",
          "Submitting conflicting records without guidance leaves the problem unresolved."
        ]
      }),
      collegePracticeQuestion({
        id: "nm-bcom-economics-prep-06",
        prompt: "Which statement is most responsible when discussing NM admission with a friend?",
        options: [
          "The latest official notice is the authority for the current cycle",
          "Every online coaching claim is equally reliable",
          "A single past list guarantees this year's result",
          "No document check is needed if marks are strong"
        ],
        answerIndex: 0,
        explanation: "The current official notice is the appropriate source for the cycle's published process; preparation should remain honest about what is not known.",
        whyWrong: [
          "Coaching material may be useful for planning but is not automatically an admissions authority.",
          "A past list cannot guarantee a future cycle's outcome.",
          "Strong marks do not remove the need to follow the current document instructions."
        ]
      })
    ]
  },

  "st-xaviers-ba": {
    collegeId: "st-xaviers-ba",
    title: "St. Xavier's BA: application and merit-readiness",
    moduleStatus: "application-and-merit-readiness",
    confirmed: [
      "The official St. Xavier's College BA admissions page is the source for the displayed cycle's admission information.",
      "The page includes cycle-specific seat, category and fee information; this module makes no invented entrance-test claim."
    ],
    verifyNext: [
      "Check the live BA admissions page for the current application window, eligibility, seat or category wording and document instructions.",
      "Confirm whether the current cycle publishes any additional selection or merit instructions before planning around them."
    ],
    dailyPlan: [
      "15 minutes: read the live BA page and write down only facts that are visible there, with the date checked.",
      "20 minutes: prepare a clean application folder for marks, identity and any documents the current notice requests.",
      "20 minutes: practise a concise, truthful explanation of why a BA and economics-related study interest you.",
      "10 minutes: rehearse checking an application form for names, dates, categories, uploads and confirmation receipts."
    ],
    checklist: [
      "I am using the current official BA page rather than an old admission post.",
      "I have not assumed an entrance test, cutoff or selection rule that the current page does not publish.",
      "I have checked the current eligibility and document wording before preparing uploads.",
      "I can explain my academic interests without presenting hobbies or plans as achievements.",
      "I have a way to save the submitted form and any official acknowledgement."
    ],
    practiceQuestions: [
      collegePracticeQuestion({
        id: "st-xaviers-ba-prep-01",
        prompt: "If the current BA page does not state an entrance test, what is the most careful conclusion?",
        options: [
          "An entrance test definitely exists but is hidden",
          "No further checking is ever needed",
          "Do not invent a test; verify the current selection and application instructions",
          "Prepare using an unrelated college's paper"
        ],
        answerIndex: 2,
        explanation: "Absence of a stated test is not permission to invent one or to stop checking. The live official instructions should guide preparation.",
        whyWrong: [
          "A hidden test is speculation, not a confirmed admissions fact.",
          "Applicants still need to verify dates, documents and any updated instructions.",
          "An unrelated paper cannot establish this route's selection process."
        ]
      }),
      collegePracticeQuestion({
        id: "st-xaviers-ba-prep-02",
        prompt: "When a page lists information for a displayed admission cycle, a careful applicant should:",
        options: [
          "Assume it applies forever",
          "Record the cycle and recheck the live page for the intended application year",
          "Replace the dates with a friend's dates",
          "Ignore all official information until coaching material appears"
        ],
        answerIndex: 1,
        explanation: "Cycle labels matter. Rechecking the live page keeps planning tied to the intended application year.",
        whyWrong: [
          "Admissions details can change between cycles.",
          "Another person's dates may refer to a different application or category.",
          "Coaching material does not replace the institution's own current instructions."
        ]
      }),
      collegePracticeQuestion({
        id: "st-xaviers-ba-prep-03",
        prompt: "Which item belongs in a sensible application tracker?",
        options: [
          "Only a hoped-for selection result",
          "Official URL, dates checked, required documents and submission status",
          "Rumours about other applicants' marks",
          "A copied answer to every personal question"
        ],
        answerIndex: 1,
        explanation: "A tracker should make the process auditable: source, dates, requirements and what has been completed.",
        whyWrong: [
          "A hoped-for result does not help manage the application steps.",
          "Other applicants' rumours are not reliable application records.",
          "Copied personal answers are not truthful preparation."
        ]
      }),
      collegePracticeQuestion({
        id: "st-xaviers-ba-prep-04",
        prompt: "How should you answer a question about why you want to study a BA?",
        options: [
          "Give a specific learning interest and a real reason it matters to you",
          "Say the degree guarantees a particular job",
          "List every subject without explaining any connection",
          "Use an impressive-sounding experience you did not have"
        ],
        answerIndex: 0,
        explanation: "A credible answer links a real academic curiosity to the kind of learning you want from a BA.",
        whyWrong: [
          "A degree cannot honestly be presented as a guaranteed job outcome.",
          "A disconnected list does not show direction or reflection.",
          "Inventing experience undermines the application and interview response."
        ]
      }),
      collegePracticeQuestion({
        id: "st-xaviers-ba-prep-05",
        prompt: "If category or document instructions are unclear, what should you do?",
        options: [
          "Guess and submit immediately",
          "Ask an unofficial group to decide the rule",
          "Read the current official instructions and use the stated contact or help route",
          "Upload a document with someone else's information"
        ],
        answerIndex: 2,
        explanation: "Official instructions and the institution's stated support channel are the safest way to resolve an application ambiguity.",
        whyWrong: [
          "Guessing can create an avoidable eligibility or document error.",
          "An unofficial group may misunderstand the current rule.",
          "Someone else's information is not an acceptable substitute for your document."
        ]
      }),
      collegePracticeQuestion({
        id: "st-xaviers-ba-prep-06",
        prompt: "Which preparation activity is useful without pretending to know an official paper pattern?",
        options: [
          "Practise clear reading, basic reasoning and truthful application explanations",
          "Memorise an invented section-weight table",
          "Buy a supposed leaked paper",
          "Ignore the application because practice alone decides admission"
        ],
        answerIndex: 0,
        explanation: "Transferable readiness can be practised while the live admissions process is verified separately; no invented paper pattern is needed.",
        whyWrong: [
          "An invented table is not an official basis for preparation.",
          "A supposed leak is not a trustworthy or ethical preparation source.",
          "Application completion remains essential regardless of practice quality."
        ]
      })
    ]
  },

  "christ-bsc-economics": {
    collegeId: "christ-bsc-economics",
    title: "CHRIST BSc Economics: application, interview and presentation readiness",
    moduleStatus: "application-interview-presentation-readiness",
    confirmed: [
      "The official CHRIST course page is the source for the displayed BSc Economics, Honours and Honours with Research course information.",
      "Programme structure, campus, eligibility and selection details can change; this module prepares communication and economics reasoning without claiming a fixed current process."
    ],
    verifyNext: [
      "Read the current CHRIST course and admissions pages for the intended campus, eligibility, application dates and selection stages.",
      "Confirm any current interview, presentation, document or fee instructions on the live official pages before relying on them.",
      "Use official current sources before quoting a statistic, policy detail or selection rule in an answer."
    ],
    dailyPlan: [
      "15 minutes: check one current official application detail and record its source and verification date.",
      "20 minutes: answer one economics concept question aloud using a definition, example and caveat.",
      "20 minutes: rehearse a 90-second presentation with an opening, three points, one example and a conclusion.",
      "10 minutes: review one interview answer for specificity, honesty, listening and a useful follow-up question."
    ],
    checklist: [
      "I have checked the current CHRIST course and admissions pages for my intended route and campus.",
      "I can explain why BSc Economics interests me without inventing course features or achievements.",
      "I can define an economics concept and apply it to a simple, truthful example.",
      "I can deliver a short presentation within a planned time without reading every sentence.",
      "I can say when a current fact needs verification instead of guessing."
    ],
    practiceQuestions: [
      collegePracticeQuestion({
        id: "christ-bsc-economics-prep-01",
        prompt: "A credible answer to ‘Why BSc Economics at CHRIST?’ should combine:",
        options: [
          "A truthful academic interest, a learning fit and willingness to verify course details",
          "A claim that selection is guaranteed",
          "Generic praise with no reference to learning",
          "A list of invented awards"
        ],
        answerIndex: 0,
        explanation: "A strong answer is specific about the applicant's interest while remaining accurate about the current course and admissions information.",
        whyWrong: [
          "Selection cannot honestly be guaranteed by an applicant's answer.",
          "Generic praise does not demonstrate academic fit.",
          "Invented awards are neither truthful nor necessary for a good response."
        ]
      }),
      collegePracticeQuestion({
        id: "christ-bsc-economics-prep-02",
        prompt: "For a 90-second economics presentation, which structure is most usable?",
        options: [
          "Long background, many unrelated facts and no close",
          "Opening question, three connected points, one example and a conclusion",
          "Only a memorised definition repeated several times",
          "A current statistic quoted without a source or date"
        ],
        answerIndex: 1,
        explanation: "A short presentation needs a clear route through the idea. The example and conclusion show application and significance without overloading the time.",
        whyWrong: [
          "Unrelated facts use time without giving the listener a clear argument.",
          "Repeating a definition does not explain or apply the concept.",
          "An undated statistic cannot be responsibly used as current evidence."
        ]
      }),
      collegePracticeQuestion({
        id: "christ-bsc-economics-prep-03",
        prompt: "If an interviewer asks for the current inflation rate and you have not checked it, the best response is to:",
        options: [
          "Invent a plausible percentage",
          "Say that you would verify the current official figure and explain the concept accurately",
          "Change the topic without acknowledging the gap",
          "Present an old number as current"
        ],
        answerIndex: 1,
        explanation: "Intellectual honesty means distinguishing a concept you understand from a live number that must be checked in an authoritative current source.",
        whyWrong: [
          "A plausible number is still fabricated if it has not been verified.",
          "Avoiding the question entirely hides a gap instead of addressing it responsibly.",
          "An old figure may not describe the current period."
        ]
      }),
      collegePracticeQuestion({
        id: "christ-bsc-economics-prep-04",
        prompt: "When a graph contradicts your first expectation, what should you do first?",
        options: [
          "Delete the inconvenient observation",
          "Check axes, units, definitions and the data period before revising the explanation",
          "Insist that your first idea must be correct",
          "Claim the graph proves causation"
        ],
        answerIndex: 1,
        explanation: "Careful analysis checks whether the graph was read correctly, then investigates the evidence and revises the hypothesis if needed.",
        whyWrong: [
          "Removing an inconvenient observation is not evidence-led analysis.",
          "Defending an idea without checking the evidence confuses confidence with reasoning.",
          "A graph can show a pattern without proving a causal relationship."
        ]
      }),
      collegePracticeQuestion({
        id: "christ-bsc-economics-prep-05",
        prompt: "Which interview response shows useful academic curiosity?",
        options: [
          "I know everything important already",
          "I would like to explore a focused question and test it against evidence",
          "I will agree with any answer the interviewer gives",
          "I choose economics only because it sounds prestigious"
        ],
        answerIndex: 1,
        explanation: "Curiosity becomes credible when it names a question and a way to learn, compare evidence or revise a view.",
        whyWrong: [
          "Claiming complete knowledge leaves no room for honest learning.",
          "Automatic agreement does not show independent reasoning.",
          "Prestige alone does not explain an academic interest or learning goal."
        ]
      }),
      collegePracticeQuestion({
        id: "christ-bsc-economics-prep-06",
        prompt: "If you do not understand a follow-up question in an interview, the best next step is to:",
        options: [
          "Pretend to understand and give an unrelated answer",
          "Ask for the question to be clarified, then reason from what you know",
          "Blame the interviewer for asking it",
          "Use a memorised paragraph regardless of the question"
        ],
        answerIndex: 1,
        explanation: "Clarifying the question and then giving a bounded, honest response shows listening and learning discipline.",
        whyWrong: [
          "An unrelated answer avoids the task and can create a larger misunderstanding.",
          "Blaming the interviewer does not demonstrate maturity or problem-solving.",
          "A memorised paragraph is not responsive communication."
        ]
      })
    ]
  },

  "cuet-ug": {
    collegeId: "cuet-ug",
    title: "CUET (UG): neutral current-bulletin-safe sampler",
    moduleStatus: "neutral-current-bulletin-safe-sampler",
    officialPatternStatus: "not-claimed",
    samplerNote:
      "This is a neutral practice sampler, not an official CUET (UG) pattern, syllabus, subject combination, question paper or score prediction.",
    confirmed: [
      "The NTA CUET (UG) official home is the source to use for the current year bulletin, dates, subjects and participating-university rules.",
      "No official CUET (UG) pattern, current cutoff, score statistic or subject rule is hard-coded in this module."
    ],
    verifyNext: [
      "Read the current CUET (UG) bulletin on the official NTA site before choosing subjects, languages, test details or application dates.",
      "Check each intended university's current CUET requirements separately; participation does not make every programme rule identical.",
      "Replace planning assumptions with the current official notices if the bulletin or university instructions change."
    ],
    dailyPlan: [
      "10 minutes: verify one current bulletin or university requirement and record the official source and date.",
      "25 minutes: attempt two sampler questions without treating their mix or difficulty as an official blueprint.",
      "15 minutes: review the reasoning for each wrong answer and note whether the issue was concept, reading or calculation.",
      "10 minutes: update a subject and application checklist only from current official instructions."
    ],
    checklist: [
      "I have read the current official CUET (UG) bulletin before making subject or date decisions.",
      "I understand that this sampler does not claim an official pattern or predict a score.",
      "I have checked the intended university and programme rules in addition to the NTA information.",
      "I keep current dates, subjects, eligibility and application details linked to their official source.",
      "I review errors by reasoning rather than assuming a practice question represents the live exam."
    ],
    practiceQuestions: [
      collegePracticeQuestion({
        id: "cuet-ug-prep-01",
        prompt: "Before selecting CUET (UG) subjects for an intended programme, the safest first step is to:",
        options: [
          "Copy a subject combination from an old video",
          "Read the current official bulletin and the university's programme requirements",
          "Assume every participating university uses identical rules",
          "Choose subjects based only on a friend's score"
        ],
        answerIndex: 1,
        explanation: "Subject choices should be based on the current NTA bulletin and the current requirements of the intended programme or university.",
        whyWrong: [
          "An old video may describe a different cycle or incomplete rule set.",
          "Participating universities can publish programme-specific requirements.",
          "A friend's score does not establish the subject requirements for your programme."
        ]
      }),
      collegePracticeQuestion({
        id: "cuet-ug-prep-02",
        prompt: "What does this neutral sampler claim about the official CUET (UG) pattern?",
        options: [
          "It reproduces the official section weights",
          "It is a guaranteed score predictor",
          "It makes no official pattern claim and is only broad practice",
          "It is an authentic past paper"
        ],
        answerIndex: 2,
        explanation: "The sampler is intentionally neutral and current-bulletin-safe. It provides practice without presenting an invented blueprint or past-paper claim.",
        whyWrong: [
          "No official section weights are asserted here.",
          "A small original practice set cannot predict an applicant's score.",
          "These questions are original practice material, not an authentic past paper."
        ]
      }),
      collegePracticeQuestion({
        id: "cuet-ug-prep-03",
        prompt: "A current date is missing from your preparation notes. What is the responsible action?",
        options: [
          "Use the date from the previous cycle without checking",
          "Check the current official bulletin or notice and record its date",
          "Estimate the date from a coaching calendar",
          "Ignore the deadline until after it passes"
        ],
        answerIndex: 1,
        explanation: "Dates are time-sensitive. The current official bulletin or notice should be checked and dated before it controls an application plan.",
        whyWrong: [
          "Previous-cycle dates may not carry over.",
          "A coaching calendar is not the authoritative source for the current deadline.",
          "Waiting until after a deadline removes the opportunity to act."
        ]
      }),
      collegePracticeQuestion({
        id: "cuet-ug-prep-04",
        prompt: "A student misses a sampler question because of a calculation error. The best review is to:",
        options: [
          "Label the entire subject impossible",
          "Rework the steps, identify the first error and try a similar original example",
          "Memorise the answer choice without understanding it",
          "Assume the official exam will contain the same question"
        ],
        answerIndex: 1,
        explanation: "Error review is most useful when it identifies the first incorrect step and tests whether the corrected method transfers to a new example.",
        whyWrong: [
          "One calculation error does not establish that an entire subject is impossible.",
          "Memorising an option does not repair the reasoning process.",
          "An original sampler question makes no claim about an official future question."
        ]
      }),
      collegePracticeQuestion({
        id: "cuet-ug-prep-05",
        prompt: "Which source should settle a question about an NTA-published CUET (UG) application rule?",
        options: [
          "The current official NTA bulletin or notice",
          "A screenshot with no date or link",
          "An anonymous comment",
          "A practice question's explanation"
        ],
        answerIndex: 0,
        explanation: "The current official NTA bulletin or notice is the primary source for NTA's published application rules.",
        whyWrong: [
          "An undated screenshot cannot show whether the rule is current or complete.",
          "An anonymous comment has no demonstrated authority for an application rule.",
          "Practice explanations teach reasoning and do not publish official application rules."
        ]
      }),
      collegePracticeQuestion({
        id: "cuet-ug-prep-06",
        prompt: "Why should a CUET (UG) applicant check an intended university separately after reading the NTA bulletin?",
        options: [
          "Because the bulletin is never useful",
          "Because every programme automatically accepts every subject",
          "Because programme and university requirements may add route-specific instructions",
          "Because unofficial rankings replace official requirements"
        ],
        answerIndex: 2,
        explanation: "The NTA bulletin and university or programme instructions answer related but distinct questions, so both current sources matter.",
        whyWrong: [
          "The official bulletin remains important for the common test information it publishes.",
          "Automatic acceptance of every subject is an unsupported assumption.",
          "Unofficial rankings cannot replace the programme's published requirements."
        ]
      })
    ]
  }
});
