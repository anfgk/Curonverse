import { RhythmName } from "./temperatureData";

export const rhythmRoutineData: Record<
  RhythmName,
  {
    header: {
      title: (userName: string) => string;
      subText: string;
    };
    guide: string;
    routines: Array<{
      title: string;
      desc: string;
    }>;
  }
> = {
  SparkFlame: {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText:
        "즉각적인 표현은 좋지만,\n" +
        "감정의 불꽃을 다듬는 게 회복의 시작이에요.",
    },
    guide: "불타오르는 감정에 잠시\n 숨을 돌릴 틈을 주어야 해요.",
    routines: [
      {
        title: "3초 멈춤,\n 5초 호흡",
        desc: "감정이 터지기 전\n 짧게 숨을 멈추고,\n 내쉬어요.",
      },
      {
        title: "지금 감정을 한 단어로\n 말해보기",
        desc: "채팅창 또는 개인 노트에\n 떠오르는 감정 한 단어만\n 써도 괜찮아요.",
      },
      {
        title: "감정을 쏟는\n 드럼비트 음악 듣기",
        desc: "Ludovico Einaudi\n – Experience",
      },
    ],
  },
  WarmFlow: {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText: "따뜻한 감정의 흐름을\n유지하는 것이 중요해요.",
    },
    guide: "감정의 흐름을\n부드럽게 이어가야 해요.",
    routines: [
      {
        title: "따뜻한 차 한 잔\n마시기",
        desc: "차를 마시며\n감정을 정리해요.",
      },
      {
        title: "감정 일기\n쓰기",
        desc: "오늘 느낀 감정을\n차분히 기록해요.",
      },
      {
        title: "따뜻한 음악\n듣기",
        desc: "부드러운 멜로디로\n감정을 달래요.",
      },
    ],
  },
  HealingLoop: {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText: "감정을 되새기며\n회복하는 시간이 필요해요.",
    },
    guide: "감정을 천천히\n되새겨보세요.",
    routines: [
      {
        title: "감정 회복\n명상",
        desc: "조용한 곳에서\n감정을 되새겨요.",
      },
      {
        title: "감정 회복\n일기",
        desc: "감정을 되새기며\n기록해요.",
      },
      {
        title: "감정 회복\n음악",
        desc: "치유되는 음악으로\n감정을 달래요.",
      },
    ],
  },
  QuietSync: {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText: "조용한 감정의\n조화가 필요해요.",
    },
    guide: "감정을 조용히\n조율해보세요.",
    routines: [
      {
        title: "조용한 명상\n하기",
        desc: "조용한 곳에서\n감정을 정리해요.",
      },
      {
        title: "감정 조율\n일기",
        desc: "감정을 조용히\n기록해요.",
      },
      {
        title: "조용한 음악\n듣기",
        desc: "차분한 음악으로\n감정을 달래요.",
      },
    ],
  },
  SilentEcho: {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText: "조용한 감정의\n메아리를 들어보세요.",
    },
    guide: "감정의 메아리를\n들어보세요.",
    routines: [
      {
        title: "감정 메아리\n명상",
        desc: "조용한 곳에서\n감정을 들어요.",
      },
      {
        title: "감정 메아리\n일기",
        desc: "감정을 조용히\n기록해요.",
      },
      {
        title: "감정 메아리\n음악",
        desc: "조용한 음악으로\n감정을 달래요.",
      },
    ],
  },
  HiddenPearl: {
    header: {
      title: (userName: string) =>
        `${userName}님을 위한 감정 관리 루틴을 추천해드려요.`,
      subText: "숨겨진 감정의\n진주를 찾아보세요.",
    },
    guide: "숨겨진 감정을\n찾아보세요.",
    routines: [
      {
        title: "감정 탐색\n명상",
        desc: "조용한 곳에서\n감정을 찾아요.",
      },
      {
        title: "감정 탐색\n일기",
        desc: "감정을 천천히\n기록해요.",
      },
      {
        title: "감정 탐색\n음악",
        desc: "차분한 음악으로\n감정을 찾아요.",
      },
    ],
  },
};
