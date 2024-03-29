# 🍿 learning-pop

## Index

1. 프로젝트 기획 동기 및 설명
2. 사용 기술 및 구현 기능
3. 프로젝트를 통해 얻은 인사이트
4. 프로젝트 화면

## 1. 프로젝트 기획 동기 및 설명

learning-pop은 말 그대로 팝송을 통해 영어를 재밌게 배우고자 기획한 프로젝트입니다.
영어라는 언어를 많이 듣고, 많이 쓰고, 많이 읽는 연습을 꾸준히 할 수 있도록 좋아하는 분야인 팝송으로 선택하게 되었습니다.

좋아하는 팝송 정보와 마음에 드는 번역 가사를 직접 등록할 수 있습니다.
또한 영어 단어를 외울 때 영단어가 무슨 뜻인지 옆에 적는 것처럼 가사 뜻을 직접 적고, 저장할 수 있도록 구현했습니다.

## 2. 사용 기술

#### 🛠️ 사용 기술 스택

FE
`React 18.2.0` `TypeScript` `react-router-dom 6.22.2` `bootstrap 5.3.3`

- SPA로 업데이트 할 부분만을 새롭게 렌더링하고, 컴포넌트 재사용에 장점을 가진 React 라이브러리를 사용했습니다.
- 페이지 라우트 처리를 위해 react-router-dom를 사용했습니다.
- bootstrap grid를 사용해 반응형 UI를 간단히 구현하고자 사용했습니다.

BE
`Node.js` `Express` `MongoDB` `Mongoose` `cloudinary`

- 서버를 처음 만들어보기 때문에 JS 언어 기반의 Node.js, Express를 사용했습니다.
- NoSQL인 MongoDB는 단순한 단일 스키마 구조의 데이터를 쉽게 저장하고 사용할 수 있으며, 복잡한 쿼리 연산이 필요하지 않아 선택하였습니다.
- Mongoose와 같이 사용해 모델을 빠르게 정의하고 CRUD를 쉽게 구현할 수 있었습니다.
- 팝송의 앨범 이미지를 저장하기 위해 cloudinary를 사용했습니다.

#### 🧑‍💻 구현 기능

- 등록한 팝송 목록을 확인할 수 있습니다.
- 팝송의 제목, 가수, 앨범 이미지, 가사, 번역가사를 입력해 새로운 팝송을 등록할 수 있습니다.
- 등록한 팝송의 정보를 수정할 수 있습니다.
- 등록한 팝송을 삭제할 수 있습니다.

## 3. 프로젝트를 통해 얻은 인사이트

#### ⭐️ 컴포넌트를 재사용하는 것은 일관성을 보장하며, 버그를 쉽게 찾고 수정할 수 있게 한다.

한 컴포넌트에 반복된 코드와 레이아웃 UI를 컴포넌트화함으로 UI의 일관성도 얻고, 수정할 부분을 쉽게 파악해 오류가 발생했을 때 관리하기 좋게 개선되었습니다.

`Form` 컴포넌트의 경우 팝송을 새롭게 등록할 때, 수정할 때가 거의 동일한 UI와 폼을 사용했기 때문에 컴포넌트로 만들었습니다. 그러나 자식 컴포넌트에 있는 form 요소를 useRef 훅으로 부모 컴포넌트에서 관리하기 위해서는 일반적인 props로는 할 수 없었습니다. 이러한 문제를 해결하기 위해 `forwardRef` 함수를 사용했고, form을 각각의 컴포넌트에 적용해 사용할 수 있었습니다.

#### ⭐️ 커스텀 훅으로 API 응답을 쉽게 상태관리하고 재사용할 수 있다.

`useFetch`라는 커스텀 훅 안에서 로딩, 응답, 에러 3가지의 상태를 useState로 정의하고 요청한 url, config 값에 따라 API를 fetch로 호출해 상태를 반환하도록 구현했습니다.
또한 Get 요청일때만 바로 호출되고 POST, PUT, PATCH, DELETE와 같은 요청은 특정한 경우에만 호출되도록 useEffect 훅에서 분기처리해 사용하였습니다.

동일한 url, config 요청일 경우 useCallback 훅을 사용해 불필요한 함수의 재생성을 방지하도록 최적화하였습니다.

#### ⭐️ 사용자 경험 개선과 최적화 고려하기

- 번들 사이즈 줄이기

  - JS 번들 사이즈가 크면 그만큼 JS로 렌더링을 하는 속도가 느릴 수 밖에 없고, 특히 CSR인 React의 특징은 초기 렌더링이 느려 사용자 경험에 큰 영향을 미칠 수 있었습니다. 그래서 번들 사이즈를 줄일 수 있는 Suspense와 React.lazy를 사용해 로딩 속도를 최적화하고 유저 경험을 개선하고 싶었습니다. 번들 사이즈가 약간 감소하긴 했지만 초기 로딩에 걸린 시간의 차이가 유의미하진 않았습니다.

  `Lazy 사용 전 번들사이즈`
  <br>
  <img width="630" alt="no lazy" src="https://github.com/lemony452/learning-pop/assets/109330624/3d21b948-ed5b-407c-b324-06d9a2bf0e92">

  `Lazy 사용 후 번들사이즈`
  <br>
  <img width="630" alt="lazy" src="https://github.com/lemony452/learning-pop/assets/109330624/2b366220-92cd-4adc-8950-59a1ab08da1e">

  - 그래서 첫 홈 페이지는 실시간을 빠르게 변경할 데이터가 없기 때문에 부분적 SSR을 적용하면 초기 로딩 속도를 더 줄일 수 있겠다고 판단하였습니다. 해당 프로젝트에는 SSR을 사용하진 않았지만 추후 다른 프로젝트를 진행할 때 SSR을 사용할 예정입니다.

- 앨범 이미지 리소스를 최적화하기
  - react-image-file-resizer 라이브러리를 사용해 이미지 용량 최적화할 수 있다.
  - 앨범 이미지는 특정 크기로 사용하기 때문에 파일 업로드 시 용량이 큰 고화질로 로딩 속도를 많이 잡을 필요가 없다. 따라서 1MB 로 file.size 제한하는 로직을 추가할 예정이다.
  - react-progressive-graceful-image를 사용해 jpeg 이미지가 한줄씩 이미지를 그리는 것 대신 저화질의 이미지를 먼저 보여주고 점진적으로 고화질 이미지가 다운되면 이미지를 교체해주어 사용자 경험을 개선할 수 있다.

## 4. 프로젝트 화면

`홈`
<br>
<img width="600" alt="home" src="https://github.com/lemony452/learning-pop/assets/109330624/d22d8bca-b368-49a1-9256-b6d8ba203f24">

`팝송 플레이리스트`
<br>
<img width="600" alt="popsongs" src="https://github.com/lemony452/learning-pop/assets/109330624/47d31cf7-cf94-42a7-8560-402fc55c4c7e">

`팝송 상세 페이지`
<br>
<img width="600" alt="detail" src="https://github.com/lemony452/learning-pop/assets/109330624/4b0bc098-a4fd-4ac2-acaa-8ebb7e5e62ff">

`팝송 등록 페이지`
<br>
<img width="600" alt="new" src="https://github.com/lemony452/learning-pop/assets/109330624/343ede94-46d1-4286-96b8-790cb79151a6">

`팝송 수정 페이지`
<br>
<img width="600" alt="edit" src="https://github.com/lemony452/learning-pop/assets/109330624/3dce94be-ed1e-4bcf-bb3a-5068a77a5dcd">
