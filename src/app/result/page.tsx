'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

// 스타일 컴포넌트들
const Container = styled.div`
  width: 375px;
  min-height: 812px;
  margin: 0 auto;
  color: white;
`;

const TopSection = styled.div`
  background: #98C6D0;
  padding-bottom: 20px;
`;

const BottomSection = styled.div`
  background: #3a3a3a;
  min-height: 300px;
`;

const Header = styled.div`
  padding: 20px 20px 20px;
  text-align: left;
`;

const PageNumber = styled.div`
  font-size: 18px;
  font-weight: 800;
  margin-bottom: 10px;
`;

const MainTitle = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  font-weight: 300;
  line-height: 1.8;
  opacity: 0.9;
  white-space: pre-line;
  max-height: 240px;
  overflow-y: auto;
  padding-right: 8px;

  /* 커스텀 스크롤바 스타일 */
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.4);
    border-radius: 2px;
    transition: background 0.2s ease;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.6);
  }

  /* Firefox 스크롤바 스타일 */
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.4) rgba(255, 255, 255, 0.1);
`;

const KeywordSection = styled.div`
  padding: 0 20px 20px;
`;

const KeywordContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: -20px;
  margin-bottom: 10px;
`;

const KeywordCircle = styled.div<{ index: number }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${props => 
    props.index === 0 ? '#5fb3d4' : 
    props.index === 1 ? '#4a9bc1' : 
    '#3d7b96'
  };
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  transition: transform 0.2s ease;
  position: relative;
  z-index: ${props => 3 - props.index};
  margin-left: ${props => props.index > 0 ? '-20px' : '0'};

  &:hover {
    transform: scale(1.05);
  }
`;

const KeywordLabel = styled.div`
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.8;
  margin-top: 10px;
`;

const AnalysisSection = styled.div`
  background: transparent;
  padding: 20px;
`;

const AnalysisItem = styled.div`
  margin-bottom: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  padding: 16px 0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 0;
  }
`;

const AnalysisHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 0;
`;

const AnalysisTitle = styled.h3`
  font-size: 18px;
  font-weight: 500;
  margin: 0;
  display: flex;
  align-items: center;
  
  &::before {
    content: '➤';
    margin-right: 12px;
    font-size: 14px;
    opacity: 0.8;
  }
`;

const AnalysisContent = styled.div<{ isOpen: boolean }>`
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease;
  padding-top: ${props => props.isOpen ? '12px' : '0'};
  padding-left: 26px;
`;

const AnalysisText = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.85;
  margin: 0;
  color: #f0f0f0;
`;

const ArrowIcon = styled.span<{ isOpen: boolean }>`
  font-size: 16px;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  transition: transform 0.3s ease;
  opacity: 0.7;
`;

const PageIndicator = styled.div`
  text-align: center;
  padding: 30px 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const PageDot = styled.div<{ active?: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.3)'};
  cursor: pointer;
  transition: background 0.3s ease;
`;

const PageIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  
  &::before {
    content: '↓';
    color: white;
    font-size: 16px;
    opacity: 0.8;
  }
`;

const PageText = styled.span`
  font-size: 24px;
  font-weight: 500;
  margin-left: 10px;
`;

// 메인 컴포넌트
const ResultPage: React.FC = () => {
  const [openSections, setOpenSections] = useState<number[]>([]);
  const [currentMBTI, setCurrentMBTI] = useState<string>('EPSA');
  const [currentPage, setCurrentPage] = useState<number>(1);

  // 감정 MBTI별 키워드 매핑 데이터
  const mbtiKeywords: Record<string, string[]> = {
    'EPSA': ['고요', '안정', '관찰'],
    'EPSU': ['조절', '중심', '인식'],
    'EPIA': ['연결', '수용', '공감'],
    'EPIU': ['분별', '자기감지', '명확함'],
    'EHSA': ['따뜻함', '정리', '방향성'],
    'EHSU': ['정돈', '내면성', '흐름'],
    'EHIA': ['나눔', '안정', '공감'],
    'EHIU': ['자기보호', '자각', '온기'],
    'RPSA': ['분석', '통제', '거리두기'],
    'RPSU': ['감지', '인식', '안전'],
    'RPIA': ['이해', '해석', '안정'],
    'RPIU': ['감정탐색', '내면', '속도'],
    'RHSA': ['수용', '침착', '시간'],
    'RHSU': ['화목', '말 없는 표현', '안전'],
    'RHIA': ['공명', '집중', '해석'],
    'RHIU': ['감정기록', '상징', '여운']
  };

  // 감정 MBTI별 키워드 설명 매핑 데이터
  const mbtiDescriptions: Record<string, Record<string, string>> = {
    'EPSA': {
      '고요': '감정을 차분적으로 표현하지 않아요.',
      '안정': '내면의 안정을 유지하고자 노력해요.',
      '관찰': '감정을 조용히 관찰 후 판단해요.'
    },
    'EPSU': {
      '조절': '감정을 스스로 조절하려고 해요.',
      '중심': '자신만의 중심을 유지하려 해요.',
      '인식': '감정 변화를 섬세하게 인식해요.'
    },
    'EPIA': {
      '연결': '타인과의 감정적 연결을 중시해요.',
      '수용': '다양한 감정을 수용하려 해요.',
      '공감': '타인의 감정에 깊이 공감해요.'
    },
    'EPIU': {
      '분별': '감정을 명확히 분별하려 해요.',
      '자기감지': '자신의 감정 상태를 예민하게 감지해요.',
      '명확함': '감정 표현에서 명확함을 추구해요.'
    },
    'EHSA': {
      '따뜻함': '따뜻한 감정을 나누려 해요.',
      '정리': '복잡한 감정을 체계적으로 정리해요.',
      '방향성': '감정에 분명한 방향성을 가져요.'
    },
    'EHSU': {
      '정돈': '감정을 차근차근 정돈해요.',
      '내면성': '내면의 깊은 감정을 소중히 여겨요.',
      '흐름': '감정의 자연스러운 흐름을 따라가요.'
    },
    'EHIA': {
      '나눔': '감정을 타인과 자연스럽게 나눠요.',
      '안정': '안정된 감정 상태를 유지해요.',
      '공감': '상대방의 마음을 깊이 이해해요.'
    },
    'EHIU': {
      '자기보호': '감정적으로 자신을 보호해요.',
      '자각': '감정 변화를 민감하게 자각해요.',
      '온기': '따뜻한 온기를 간직하고 있어요.'
    },
    'RPSA': {
      '분석': '감정을 논리적으로 분석해요.',
      '통제': '감정을 통제하려는 경향이 있어요.',
      '거리두기': '감정과 적절한 거리를 두려 해요.'
    },
    'RPSU': {
      '감지': '미세한 감정 변화도 감지해요.',
      '인식': '감정의 근원을 정확히 인식해요.',
      '안전': '감정적 안전함을 추구해요.'
    },
    'RPIA': {
      '이해': '감정의 의미를 깊이 이해하려 해요.',
      '해석': '감정을 다각도로 해석해요.',
      '안정': '감정적 안정감을 중요하게 여겨요.'
    },
    'RPIU': {
      '감정탐색': '내면의 감정을 끊임없이 탐색해요.',
      '내면': '깊은 내면의 소리에 귀 기울여요.',
      '속도': '자신만의 감정 처리 속도가 있어요.'
    },
    'RHSA': {
      '수용': '모든 감정을 있는 그대로 수용해요.',
      '침착': '어떤 상황에서도 침착함을 유지해요.',
      '시간': '감정 처리에 충분한 시간이 필요해요.'
    },
    'RHSU': {
      '화목': '조화롭고 화목한 분위기를 선호해요.',
      '말 없는 표현': '말보다는 행동으로 감정을 표현해요.',
      '안전': '안전한 감정적 공간을 추구해요.'
    },
    'RHIA': {
      '공명': '타인의 감정과 깊이 공명해요.',
      '집중': '감정에 깊이 집중하는 편이에요.',
      '해석': '감정의 숨은 의미를 해석하려 해요.'
    },
    'RHIU': {
      '감정기록': '감정의 순간들을 소중히 기록해요.',
      '상징': '감정을 상징적으로 표현하는 것을 좋아해요.',
      '여운': '감정의 여운을 오래 간직해요.'
    }
  };

  // 감정 MBTI별 상세 설명 데이터
  const mbtiFullDescriptions: Record<string, { title: string; description: string }> = {
    'EPSA': {
      title: '"직진형 감정 표현자"',
      description: `당신은 감정을 빠르게 감지하고 즉시 표현하는 성향을 지녔습니다.

기쁘면 바로 웃고, 화가 나면 숨기지 않죠.

이러한 표현력은 사람들에게 진실하고 에너지 넘치는 인상을 줍니다.

하지만 때로는 말보다 감정이 앞설 수 있고, 그 감정이 왜 생겼는지 되돌아볼 시간이 부족할 수도 있어요.

감정을 외부에 전달하는 데 능한 만큼, 그 에너지를 조금만 안으로 돌려보는 루틴이 도움이 됩니다.

"내가 느낀 감정, 나에게 어떤 신호였을까?"라는 질문이 회복의 실마리가 될 수 있어요.

추천 리듬은 Spark Flame. 감정이 타오를 때, 나의 중심도 잊지 마세요.`
    },

    'EPSU': {
      title: '"즉흥적 감정 폭발자"',
      description: `당신은 감정이 생기면 바로 말하거나 행동으로 표현하지만, 표현하고 난 뒤 스스로도 왜 그랬는지 알지 못해 혼란스러울 수 있습니다.

감정은 강하게 튀어나오지만 정리되지 않아, 주변 사람들과의 갈등이 생길 때가 있죠.

사람들은 당신의 진심을 몰라 오해할 수 있고, 당신 자신도 그 감정이 뭘 말하고 있었는지 모르고 지나칠 수 있어요.

즉흥적인 감정을 다듬기 위해선 '멈춤'이 필요합니다.

표현보다 먼저 '인지'하는 루틴이 감정을 더 건강하게 만들 수 있어요.

추천 리듬은 Spark Flame.`
    },

    'EPIA': {
      title: '"감정 커뮤니케이터"',
      description: `당신은 감정을 관계 속에서 잘 나누고, 그 의미도 빠르게 이해합니다.

타인의 감정을 민감하게 감지하고, 공감하는 데 뛰어난 감각을 가졌어요.

당신의 존재는 주변에 따뜻한 안정감을 줄 수 있지만, 때로는 타인의 감정에 너무 몰입해 자신의 중심이 흔들릴 수 있어요.

공감과 자기존중의 균형을 유지하려면, 감정이 동요되는 순간마다 "내 감정은 지금 어디쯤 있는가"를 되짚어야 합니다.

감정의 나침반을 가지세요.

추천 리듬은 Warm Flow 또는 Healing Loop.`
    },

    'EPIU': {
      title: '"흐름에 맞춰주는 감정 전달자"',
      description: `당신은 감정을 외부에 잘 표현하지만, 그 감정이 자신의 것인지 아니면 타인의 정서에 반응한 것인지 헷갈릴 때가 많습니다.

주변 정서의 변화에 민감하게 반응하는 당신은, 다정하고 감성적인 사람으로 비칩니다.

하지만 감정을 표현한 뒤 '내가 왜 이런 기분이 들었을까?'라는 질문에 명확히 답하지 못할 때 스스로도 혼란스러울 수 있어요.

감정의 주도권을 다시 갖기 위해선, 조용한 정리 루틴이 필요합니다.

가장 필요한 건 "나의 감정인지 아닌지 구분하는 힘"이에요.

추천 리듬은 Warm Flow. 흐름에 휩쓸리지 않고 스스로의 감정을 찾아가세요.`
    },

    'EHSA': {
      title: '"따뜻한 자기감정 수호자"',
      description: `당신은 다정한 방식으로 감정을 표현하고, 그 감정을 자기 중심적으로 잘 정리하는 능력을 갖고 있습니다.

표현은 부드럽지만 감정의 방향과 기준은 분명해요.

사람들은 당신을 다정하지만 쉽게 설득되지 않는 사람으로 느낍니다.

이런 강한 내면적 신념은 좋지만, 가끔은 유연함을 잃지 않도록 감정의 유연성 루틴이 필요합니다.

당신이 품은 따뜻함은 관계의 온도가 됩니다.

추천 리듬은 Warm Flow / Quiet Sync.`
    },

    'EHSU': {
      title: '"감정 과잉 표현자"',
      description: `당신은 감정을 많이 표현하지만, 표현하는 감정이 스스로에게도 낯설게 느껴질 때가 많습니다.

말과 표정, 감정의 속도가 서로 어긋나 혼란을 겪기도 합니다.

감정을 진심으로 이해받고 싶지만, 표현의 빈도가 오히려 진심을 흐리게 만들 수 있어요.

때로는 '덜 표현하는 것'이 감정을 더 정확히 전달합니다.

감정의 중심을 잡기 위해, 조용한 자각 루틴을 권합니다.

추천 리듬은 Spark Flame / Healing Loop.`
    },

    'EHIA': {
      title: '"따뜻한 공감형 감정 리더"',
      description: `당신은 감정을 부드럽게 표현하고, 타인과의 관계 속에서 감정의 리듬을 잘 맞춰가는 능력이 있습니다.

다정함과 민감한 감정 해석 능력으로 주변 사람들의 정서적 리더가 되기도 해요.

그러나 공감 피로감이 생길 수 있고, 자신의 감정을 먼저 챙기지 못할 수도 있습니다.

"지금 나도 괜찮은가요?"를 먼저 물어보는 루틴이 필요해요.

추천 리듬은 Healing Loop / Warm Flow.`
    },

    'EHIU': {
      title: '"흐름에 흔들리는 감정 예민자"',
      description: `당신은 풍부한 감정 표현력을 가졌지만, 정서적 중심을 잡지 못하고 이리저리 흔들릴 때가 많습니다.

다정하지만 예민한 내면이 감정의 흐름에 자주 휩쓸리곤 합니다.

사람들에게 잘 맞추지만, 자신이 어떤 감정을 느끼는지는 모호할 수 있어요.

자기 자각과 정서적 근육을 키우는 루틴이 중요합니다.

추천 리듬은 Silent Echo / Healing Loop.`
    },

    'RPSA': {
      title: '"감정 분석적 내면자"',
      description: `당신은 감정을 밖으로 드러내지 않지만, 스스로의 감정을 정확하게 분석하고 정리하는 데 능숙합니다.

말보다는 생각으로 감정을 처리하고, 타인보다는 자신의 감정 기준을 중요하게 여깁니다.

이런 내향적 정서 강점은 흔들림 없이 감정을 유지하게 하지만, 너무 안으로만 머물면 주변과의 연결이 끊어질 수 있어요.

가끔은 감정을 표현해보는 루틴이 연결을 만들어줍니다.

추천 리듬은 Quiet Sync / Healing Loop.`
    },

    'RPSU': {
      title: '"고요한 무표정 속 감정 회피자"',
      description: `당신은 감정을 말로 표현하는 것이 익숙하지 않고, 스스로도 감정이 잘 느껴지지 않을 때가 많습니다.

무언가 불편하거나 답답한 순간에도 이를 드러내기보다는 그저 참거나 외면하는 방식으로 넘겨왔을 가능성이 있습니다.

이러한 방식은 당신을 안전하게 지켜주기도 했지만, 시간이 지날수록 감정의 흐름을 읽기 어렵게 만들 수 있어요.

스스로를 이해하기 위해서는 감정을 억지로 끌어내기보다, '무엇이 나를 불편하게 했는가'를 부드럽게 추적하는 시간이 필요합니다.

추천 리듬은 Silent Echo. 당신의 고요 속에도 분명 감정의 메아리가 있습니다.`
    },

    'RPIA': {
      title: '"조용한 감정 독해자"',
      description: `당신은 감정을 조용히 느끼지만, 그 감정의 의미를 정확히 해석하고 타인에게도 섬세하게 반응합니다.

표현은 적지만 깊이 있게 정서 흐름을 이해합니다.

내면에 신중하고 부드러운 감정이 있어 사람들에게 신뢰감을 주는 존재입니다.

이 감정의 깊이를 지키기 위해, 정기적인 감정 정리 루틴이 중요합니다.

추천 리듬은 Healing Loop / Quiet Sync.`
    },

    'RPIU': {
      title: '"조용한 정서 순응자"',
      description: `당신은 감정을 표현하지 않고, 스스로 느끼는 데도 시간이 필요합니다.

그러나 관계 속 감정에 맞춰 조용히 반응하며, 자신만의 느린 정서 흐름을 가지고 있어요.

감정이 늦게 올라오고 늦게 내려가기 때문에 속도를 강요받을 때 지치기 쉽습니다.

"지금 감정이 올라오는 중이에요"라는 내면의 신호에 귀를 기울여 주세요.

추천 리듬은 Silent Echo / Hidden Pearl.`
    },

    'RHSA': {
      title: '"고요한 감정 수호자"',
      description: `당신은 감정을 드러내지 않지만 오래 품고, 자기 안에서 천천히 정리해 나갑니다.

사람들은 당신이 감정을 느끼지 않는다고 생각할 수도 있지만, 사실은 아주 깊고 밀도 높은 정서가 있습니다.

표현의 부족으로 오해받지 않도록, 자신만의 리듬으로 감정을 풀어내는 루틴이 필요합니다.

추천 리듬은 Quiet Sync / Hidden Pearl.`
    },

    'RHSU': {
      title: '"정서 소외형 감정 억제자"',
      description: `당신은 감정을 거의 표현하지 않고, 스스로도 감정 자각이 어렵습니다.

감정을 무시하거나 참는 것이 습관처럼 되었을 수 있습니다.

하지만 억눌린 감정은 사라지지 않고 축적됩니다.

'감정을 인식하는 연습'이 반드시 필요합니다.

처음은 단어 하나, 색깔 하나로 시작해도 괜찮아요.

추천 리듬은 Hidden Pearl / Silent Echo.`
    },

    'RHIA': {
      title: '"조용한 공감자"',
      description: `당신은 감정을 말로 표현하진 않지만, 상대방의 정서 변화에 민감하게 반응하고 잘 이해합니다.

정서 해석 능력이 뛰어나며, 자신의 감정 또한 섬세하게 인지할 수 있어요.

이 조용한 공감력을 활용하려면, 안정적인 루틴과 감정의 안전한 공간이 필요합니다.

추천 리듬은 Quiet Sync / Healing Loop.`
    },
    
    'RHIU': {
      title: '"은밀한 감정 보관자"',
      description: `당신은 감정을 표현하지 않고, 자각도 서서히 이뤄지는 타입입니다.

그러나 은근한 공감력이 내재되어 있으며, 감정을 말보다 상징이나 감각으로 느끼는 경향이 있어요.

감정을 직접 표현하지 않아도, 색깔이나 음악, 시를 통해 간접적으로 연결할 수 있습니다.

추천 리듬은 Hidden Pearl.`
    }
  };

  const toggleSection = (index: number) => {
    setOpenSections(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // 현재 MBTI에 해당하는 키워드들
  const keywords = mbtiKeywords[currentMBTI] || ['고요', '안정', '관찰'];
  
  // 현재 MBTI에 해당하는 분석 데이터
  const analysisData = keywords.map(keyword => ({
    title: keyword,
    content: mbtiDescriptions[currentMBTI]?.[keyword] || `${keyword}에 대한 설명입니다.`
  }));

  // MBTI별 추천 리듬 매핑
  const mbtiRhythms: Record<string, string> = {
    'EPSA': 'Spark Flame',
    'EPSU': 'Spark Flame', 
    'EPIA': 'Warm Flow',
    'EPIU': 'Warm Flow',
    'EHSA': 'Warm Flow',
    'EHSU': 'Spark Flame',
    'EHIA': 'Healing Loop',
    'EHIU': 'Silent Echo',
    'RPSA': 'Quiet Sync',
    'RPSU': 'Silent Echo',
    'RPIA': 'Healing Loop',
    'RPIU': 'Silent Echo',
    'RHSA': 'Quiet Sync',
    'RHSU': 'Hidden Pearl',
    'RHIA': 'Quiet Sync',
    'RHIU': 'Hidden Pearl'
  };

  // 페이지 전환 함수
  const nextPage = () => {
    if (currentPage < 2) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  // 1페이지 컴포넌트
  const Page1 = () => (
    <>
      <TopSection>
        <Header>
          <PageNumber>01</PageNumber>
          <MainTitle>
            현재 은지님은,<br />
            '{currentMBTI}' 감정 성향을<br />
            가지고 있어요.
          </MainTitle>
          <div style={{ 
            fontSize: '18px', 
            fontWeight: '500', 
            marginBottom: '15px',
            opacity: 0.95
          }}>
            {mbtiFullDescriptions[currentMBTI]?.title}
          </div>
          <SubTitle>
            {mbtiFullDescriptions[currentMBTI]?.description}
          </SubTitle>
        </Header>

        <KeywordSection>
          <KeywordContainer>
            {keywords.map((keyword, index) => (
              <KeywordCircle key={keyword} index={index}>
                '{keyword}'
              </KeywordCircle>
            ))}
          </KeywordContainer>
          <KeywordLabel>나에게 필요한 감정 카드</KeywordLabel>
        </KeywordSection>
      </TopSection>

      <BottomSection>
        <AnalysisSection>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: '500', 
            marginBottom: '5px',
            paddingLeft: '0'
          }}>
            감정 키워드 상세 분석
          </h3>
          
          {analysisData.map((item, index) => (
            <AnalysisItem key={index}>
              <AnalysisHeader onClick={() => toggleSection(index)}>
                <AnalysisTitle>
                  '{item.title}'
                </AnalysisTitle>
                <ArrowIcon isOpen={openSections.includes(index)}>
                  ∨
                </ArrowIcon>
              </AnalysisHeader>
              <AnalysisContent isOpen={openSections.includes(index)}>
                <AnalysisText>{item.content}</AnalysisText>
              </AnalysisContent>
            </AnalysisItem>
          ))}
        </AnalysisSection>

        <PageIndicator>
          <PageDot active={currentPage === 1} />
          <PageDot active={currentPage === 2} />
          <PageIcon onClick={nextPage} style={{ cursor: 'pointer' }} />
          <PageText>02</PageText>
        </PageIndicator>
      </BottomSection>
    </>
  );

  // 2페이지 컴포넌트
  const Page2 = () => (
    <>
      {/* 2페이지 Top Section - 어두운 배경 */}
      <div style={{
        background: 'linear-gradient(135deg, #2c2c54 0%, #40407a 100%)',
        minHeight: '400px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Header>
          <PageNumber style={{ color: 'white' }}>02</PageNumber>
          <MainTitle style={{ color: 'white', fontSize: '20px' }}>
            이러한 은지님의 감정은,<br />
            '{mbtiRhythms[currentMBTI]}' 리듬<br />
            위에 머무르고 있어요.
          </MainTitle>
        </Header>

        {/* 감정 지도 */}
        <div style={{
          textAlign: 'center',
          padding: '20px',
          position: 'relative'
        }}>
          <div style={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '10px',
            letterSpacing: '2px'
          }}>
            CURONVERSE EMOTIONAL MAP
          </div>
          <div style={{
            fontSize: '10px',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '30px'
          }}>
            Surface Level
          </div>

          {/* 감정 원들과 별들 */}
          <div style={{
            position: 'relative',
            height: '250px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* 중앙 원형 궤도 */}
            <div style={{
              position: 'absolute',
              width: '180px',
              height: '180px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '50%',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }} />

            {/* 감정 원들 */}
            <div style={{ position: 'absolute', top: '30px', left: '50%', transform: 'translateX(-50%)' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#9b59b6', opacity: 0.8 }} />
            </div>
            <div style={{ position: 'absolute', top: '80px', left: '80px' }}>
              <div style={{ width: '35px', height: '35px', borderRadius: '50%', background: '#f39c12', opacity: 0.9 }} />
            </div>
            <div style={{ position: 'absolute', top: '100px', left: '140px' }}>
              <div style={{ width: '30px', height: '30px', borderRadius: '50%', background: '#2ecc71', opacity: 0.8 }} />
            </div>
            <div style={{ position: 'absolute', top: '80px', left: '40px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#3498db', opacity: 0.8 }} />
            </div>
            <div style={{ position: 'absolute', top: '140px', right: '80px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#e74c3c', opacity: 0.7 }} />
            </div>
            <div style={{ position: 'absolute', top: '120px', right: '40px' }}>
              <div style={{ width: '25px', height: '25px', borderRadius: '50%', background: '#9b59b6', opacity: 0.6 }} />
            </div>

            {/* 별들 */}
            <div style={{ position: 'absolute', top: '20px', left: '20px', color: 'white', fontSize: '16px' }}>★</div>
            <div style={{ position: 'absolute', top: '60px', right: '30px', color: 'white', fontSize: '12px' }}>★</div>
            <div style={{ position: 'absolute', bottom: '40px', left: '30px', color: 'white', fontSize: '10px' }}>✦</div>
            <div style={{ position: 'absolute', bottom: '20px', right: '50px', color: 'white', fontSize: '14px' }}>✦</div>
            <div style={{ position: 'absolute', bottom: '60px', right: '20px', color: 'white', fontSize: '8px' }}>★</div>
          </div>
        </div>
      </div>

      {/* 2페이지 Bottom Section */}
      <BottomSection>
        <AnalysisSection>
          <h3 style={{ 
            fontSize: '16px', 
            fontWeight: '500', 
            marginBottom: '20px',
            paddingLeft: '0'
          }}>
            감정 리듬 상세 분석
          </h3>
          
          <AnalysisItem>
            <AnalysisHeader onClick={() => toggleSection(10)}>
              <AnalysisTitle style={{ fontSize: '16px' }}>
                어떤 내음을 냄으면 좋을까요?
              </AnalysisTitle>
              <ArrowIcon isOpen={openSections.includes(10)}>
                ∨
              </ArrowIcon>
            </AnalysisHeader>
            <AnalysisContent isOpen={openSections.includes(10)}>
              <AnalysisText>생각해 봅시다.</AnalysisText>
            </AnalysisContent>
          </AnalysisItem>
        </AnalysisSection>

        <PageIndicator>
          <PageIcon onClick={prevPage} style={{ cursor: 'pointer', transform: 'rotate(180deg)' }} />
          <PageDot active={currentPage === 1} />
          <PageDot active={currentPage === 2} />
          <PageText>03</PageText>
        </PageIndicator>
      </BottomSection>
    </>
  );

  return (
    <Container>
      {/* 임시 MBTI 선택 드롭다운 */}
      <div style={{ 
        position: 'fixed', 
        top: '10px', 
        right: '10px', 
        zIndex: 1000,
        background: 'rgba(0,0,0,0.8)',
        padding: '10px',
        borderRadius: '5px'
      }}>
        <select 
          value={currentMBTI} 
          onChange={(e) => setCurrentMBTI(e.target.value)}
          style={{
            padding: '5px',
            borderRadius: '3px',
            border: 'none',
            background: 'white',
            fontSize: '12px'
          }}
        >
          {Object.keys(mbtiKeywords).map(mbti => (
            <option key={mbti} value={mbti}>{mbti}</option>
          ))}
        </select>
      </div>

      {/* 페이지 렌더링 */}
      {currentPage === 1 ? <Page1 /> : <Page2 />}
    </Container>
  );
};

export default ResultPage;
