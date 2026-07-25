---
layout: post
title: "언리얼엔진 5.8에서 MCP 켜기 (공식 지원)"
categories: unreal
---

2026년 6월에 나온 언리얼엔진 5.8부터 MCP 서버 플러그인이 엔진에 기본으로 들어왔다. 아직 Experimental 딱지가 붙어있긴 한데, 그동안 서드파티 플러그인 깔아서 붙이던 걸 이제 Epic이 직접 넣어준 거라 한번 정리해둔다.

## MCP가 뭔지

MCP는 Model Context Protocol의 약자다. Anthropic이 2024년 11월에 공개한 오픈 표준인데, AI 에이전트가 외부 프로그램이나 도구랑 대화하는 방식을 규격으로 정해놓은 거다.

굳이 표준을 쓰는 이유는 락인이 안 되기 때문이다. 어떤 프로그램을 MCP로 한 번 열어두면, 그걸 Claude로 붙이든 Cursor로 붙이든 Gemini로 붙이든 다 똑같이 동작한다. AI 하나에 종속되지 않는다는 게 제일 큰 장점이다.

## 5.8에선 뭘 할 수 있나

플러그인을 켜면 에디터 안에 MCP 서버가 뜬다. 그럼 로컬 연결로 AI 에이전트가 에디터를 직접 만질 수 있게 된다. 문서에 나온 예시는 대략 이런 것들이다.

- 액터 스폰하고 조명 배치, 머티리얼 인스턴스 만들기
- 블루프린트 열어서 탐색하고 수정, 애셋이나 레벨·메시 다루기
- 자동화 테스트 돌리기

정리하면 에디터 자체를 AI가 조작할 수 있는 도구로 넘겨주는 셈이다.

## 설정하는 법

1. `Edit > Plugins`에서 플러그인 브라우저를 연다.
2. "Unreal MCP"를 검색해서 Enabled 체크. 의존성인 Toolset Registry가 같이 켜진다.
3. 에디터를 재시작한다.
4. 쓰려는 AI 에이전트(Claude Code, Cursor 등) MCP 설정에 언리얼이 띄운 로컬 서버 주소를 등록한다.

플러그인 브라우저에는 `Unreal MCP`로 보이는데 엔진 내부 식별자는 `ModelContextProtocol`이라 검색이 안 될 땐 이 이름도 찾아보면 된다.

## 아직은 실험 단계라는 것

말 그대로 Experimental이다. 포럼에는 벌써 연결이 바로 끊긴다는 버그 리포트가 올라와 있다. 실제 프로젝트에 넣기보단 어떤 워크플로가 되는지 감 잡아보는 정도로 쓰는 게 맞다.

---

### 참고 자료

- [Unreal MCP in Unreal Editor — UE 5.8 공식 문서](https://dev.epicgames.com/documentation/unreal-engine/unreal-mcp-in-unreal-editor)
- [UE 5.8 릴리스 노트](https://dev.epicgames.com/documentation/unreal-engine/unreal-engine-5-8-release-notes)
- [포럼: MCP 서버 연결 끊김 버그 리포트](https://forums.unrealengine.com/t/5-8-experimental-modelcontextprotocol-mcp-server-instantly-drops-connections/2729488)
