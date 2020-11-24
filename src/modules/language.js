const LANGMODE = "mode/LANGTOGGLE";
const LANGUAGE = "mode/LANGUAGE";

export const langToggle = () => ({ type: LANGMODE });
export const language = () => ({ type: LANGUAGE });

const kor = {
  nav: {
    menu: ["언어", "켜짐"],
    title: ["실시간 코로나 19"],
    subtitle: ["상황 보드"],
    update: ["마지막 업데이트:"],
    table: ["홈", "정보", "실시간"],
    update: ["마지막 업데이트:"],
  },
  home: {
    title: ["대한민국"],
    confirmedCase: ["확진자", "완치자", "사망자", "치료중"],
    percentage: ["확진율", "완치율", "사망률"],
    remarks: [
      "*대한민국 수치는 질병관리청 보도자료 기준",
      "*대한민국 확진자 증감수치는 전일 발표 대비 변화량",
    ],
    region: ["대구", "서울", "기타", "경기", "검역"],
    area: ["확진자:", "완치자:", "사망자:", "신규확진자:", "발생률:"],
  },
  media: {
    title: "실시간",
  },
  information: {
    symptom: {
      main: ["증상", "예방", "치료"],
      title: [
        "코로나19 감염 시의 증상은 사람마다 다릅니다. 대부분의 감염자가 경증에서 중증 수준의 증상을 보이며 입원 없이 회복 합니다.",
        "공통적인 증상은 다음과 같습니다.",
        "드물지만 다음과 같은 증상이 나타날 수도 있습니다.",
        "심각한 증상은 다음과 같습니다.",
      ],
      context: [
        "발열",
        "마른기침",
        "피로감",
        "몸살",
        "인후통",
        "설사",
        "결막염",
        "두통",
        "미각 또는 후각 상실",
        "피부 발진, 손가락 도는 발가락 변색",
        "호흡곤란 또는 숨 가쁨",
        "가슴 통증 또는 압박감",
        "언어 도는 운동 장애",
      ],
      additional: [
        "심각한 증상이 있다면 즉시 의료진의 도움을 받으세요. 의사를 보러 가거나 의료기관을 방문하기 전에 항상 미리 연락을 취하세요.",
        "다른 건강상 불편이 없는 경증 환자는 자택에서 증상을 관리해야 합니다.",
        "바이러스 감염 후 증상이 나타날 때까지 평균 5~-6일이 걸리지만 최대 14일이 소요될 수도 있습니다.",
      ],
    },
    prevention: {
      title: [
        "꼭 마스크를 착용하세요!",
        "정확한 정보를 파악하고 적절한 예방 조치를 취하여 스스로와 주변 사람을 보호하세요. 현지 보건 당국의 지시를 따르세요.",
        "코로나19 전염을 막는 방법은 다음과 같습니다.",
      ],
      context: [
        "손을 자주 씻으세요. 비누와 물 또는 알코올 성분의 손 세정제를 사용하세요.",
        "기침 또는 재채기하는 사람으로부터 안전한 거리를 유지하세요.",
        "물리적 거리두기가 불가능할 땐 마스크를 쓰세요.",
        "눈, 코 또는 입을 만지지 마세요.",
        "기침 또는 재채기를 할 때는 화장지를 이용하거나 팔꿈치를 구부려 코와 입을 가리세요.",
        "몸이 좋지 않다면 집에서 쉬세요.",
        "열, 기침, 호흡 곤란 증상이 있다면 의사의 진료를 받아야 합니다.",
      ],
    },
    treatment: {
      title: [
        "현재 코로나19는 뚜렷한 백신이나 치료제가 없습니다. 치료제를 연구 중이며 임상 시험을 통한 검증을 거쳐야 합니다",
        "자가 관리",
        "의료 치료",
      ],
      context: [
        "아프면 휴식을 취하고 수분을 충분히 섭취하며 영양가 있는 음식을 먹어야 합니다. 다른 가족 구성원으로부터 독립된 공간에 머물고 가능하다면 전용 욕실을 사용합니다. 자주 접촉하는 표면을 닦고 소독합니다.",
        "모두가 집에서 건강한 생활 습관을 지켜야 합니다. 건강한 식습관을 지키고 충분한 수면을 취하고 활력을 유지하며 가족 또는 친구와 연락할 때는 전화 또는 인터넷을 이용합니다. 어려운 시기에는 아동에 대한 보호자의 사랑과 관심이 특히 더 많이 필요합니다. 가능한 한 평소대로 일과와 일정을 수행합니다.",
        "위기 상황에서 슬픔, 스트레스, 혼란을 느끼는 것은 정상적인 반응입니다. 친구, 가족 등 신뢰하는 사람과 대화를 나누면 도움이 될 수 있습니다. 이러한 감정이 버겁게 느껴진다면 의료 종사자 또는 상담사에게 상담을 받으세요.",
        "다른 건강상 불편이 없는 경증 환자는 자가 격리하고 의료 시설 또는 코로나19 콜센터에 문의하세요.",
        "열, 기침, 호흡 곤란 증상이 있다면 의사의 진료를 받아야 합니다. 미리 병원에 연락한 후 방문하세요.",
      ],
    },
  },
};

const eng = {
  nav: {
    menu: ["language", "On"],
    title: ["Realtime Covid 19"],
    subtitle: ["Dashboard"],
    update: ["Last Updated:"],
    table: ["HOME", "INFORMATION", "MEDIA"],
    update: ["last updated:"],
  },
  home: {
    title: ["KOREA"],
    confirmedCase: ["Total cases", "Recoverd", "Deaths", "New cases"],
    percentage: [
      "Percentage of confirmed",
      "Percentage of recovered",
      "Percentage of Deaths",
    ],
    remarks: [
      "*This data is reported byKorea Disease Control and Prevention Agency",
      "*The number of new cases reported since the previous day ",
    ],
    region: ["Dae-gu", "Seoul", "etc.", "Gyeonggi", "Quarantine"],
    area: [
      "ConfirmedCase:",
      "Recovered:",
      "Deaths:",
      "under Treatment:",
      "Incidence:",
    ],
  },
  media: {
    title: "LIVE",
  },
  information: {
    symptom: {
      main: ["Symptoms", "Prevention", "Treatments"],
      title: [
        "COVID-19 affects different people in different ways. Most infected people will develop mild to moderate illness and recover without hospitalization.",
        "Most common symptoms:",
        "Less common symptoms:",
        "Serious symptoms:",
      ],
      context: [
        "fever",
        "dry cough",
        "tiredness",
        "aches and pains",
        "sore throat",
        "diarrhoea",
        "conjunctivitis",
        "headache",
        "loss of taste or smell",
        "a rash on skin, or discolouration of fingers or toes",
        "difficulty breathing or shortness of breath",
        "chest pain or pressure",
        "loss of speech or movement",
      ],
      additional: [
        "Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.",
        "People with mild symptoms who are otherwise healthy should manage their symptoms at home.",
        "On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.",
      ],
    },
    prevention: {
      title: [
        "Masks can help prevent the spread of the virus from the person wearing the mask to others.",
        "Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.",
        "To prevent the spread of COVID-19:",
      ],
      context: [
        "Clean your hands often. Use soap and water, or an alcohol-based hand rub.",
        "Maintain a safe distance from anyone who is coughing or sneezing.",
        "Wear a mask when physical distancing is not possible.",
        "Don’t touch your eyes, nose or mouth.",
        "Cover your nose and mouth with your bent elbow or a tissue when you cough or sneeze.",
        "Stay home if you feel unwell.",
        "If you have a fever, cough and difficulty breathing, seek medical attention.",
      ],
    },
    treatment: {
      title: [
        "To date, there are no specific vaccines or medicines for COVID-19. Treatments are under investigation, and will be tested through clinical trials",
        "Self care",
        "Medical Treatment",
      ],
      context: [
        "If you feel sick you should rest, drink plenty of fluid, and eat nutritious food. Stay in a separate room from other family members, and use a dedicated bathroom if possible. Clean and disinfect frequently touched surfaces.",
        "Everyone should keep a healthy lifestyle at home. Maintain a healthy diet, sleep, stay active, and make social contact with loved ones through the phone or internet. Children need extra love and attention from adults during difficult times. Keep to regular routines and schedules as much as possible.",
        "It is normal to feel sad, stressed, or confused during a crisis. Talking to people you trust, such as friends and family, can help. If you feel overwhelmed, talk to a health worker or counsellor.",
        "If you have mild symptoms and are otherwise healthy, self-isolate and contact your medical provider or a COVID-19 information line for advice.",
        "Seek medical care if you have a fever, a cough, and difficulty breathing. Call in advance.",
      ],
    },
  },
};

const initialState = {
  langMode: true,
  language: kor,
};

export default function world(state = initialState, action) {
  switch (action.type) {
    case LANGMODE:
      return {
        ...state,
        langMode: !state.langMode,
      };
    case LANGUAGE:
      return {
        ...state,
        language: state.langMode ? kor : eng,
      };
    default:
      return state;
  }
}
