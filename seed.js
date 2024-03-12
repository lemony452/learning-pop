const mongoose = require("mongoose");
const connectServer = require("./server");
const Popsong = require("./models/popsong");
connectServer();

const dummy = {
    title: "Juice",
    singer: "Lizzo",
    isDone: false,
    lyrics: 
    `Mirror, mirror on the wall
Don't say it, 'cause I know I'm cute (ooh, baby)
Louis down to my drawers
LV all on my shoes (ooh, baby)
I be dripping so much sauce
Gotta been looking like ragù (ooh, baby)
Lit up like a crystal ball
That's cool, baby, so is you
That's how I roll
If I'm shining, everybody gonna shine
(Yeah, I'm goals)
I was born like this, don't even gotta try
(Now you know)
I'm like Chardonnay, get better over time
(So you know)
Heard you say I'm not the baddest bitch, you lie
It ain't my fault that I'm out here getting loose
Gotta blame it on the Goose
Gotta blame it on my juice, baby
It ain't my fault that I'm out here making news
I'm the pudding in the proof
Gotta blame it on my juice
Ya-ya-ee, ya-ya-ee, ya-ya-ee, ya-ya-ee
Blame it on my juice, blame it, blame it on my juice
Ya-ya-ee, ya-ya-ee, ya-ya-ee, ya-ya-ee
Blame it on my juice, blame it, blame it on my juice (ooh, baby)
No, I'm not a snack at all
Look, baby, I'm the whole damn meal (ooh, baby)
Baby, you ain't being slick
Don't dare try to cop a feel (ooh, baby)
If the juice ain't worth the squeeze
If the juice don't look like this (like this, like this, like this)
Hold up, nigga, please
Don't make me have to take your bitch, shit (how I roll)
If I'm shining, everybody gonna shine
(Yeah, I'm goals)
I was born like this, don't even gotta try
(Now you know)
I'm like Chardonnay, get better over time
(So you know)
Heard you say I'm not the baddest bitch, you lie (you lie)
It ain't my fault that I'm out here getting loose
Gotta blame it on the Goose
Gotta blame it on my juice, baby
It ain't my fault that I'm out here making news
I'm the pudding in the proof
Gotta blame it on my juice
Somebody come get this man
I think he got lost in my DMs, what? My DMs, what?
You better come get your man
I think he wanna be way more than friends, what?
More than friends
What you want me to say?
It ain't my fault that I'm out here getting loose
Gotta blame it on the Goose
Gotta blame it on my juice, baby
It ain't my fault that I'm out here making news
I'm the pudding in the proof (pudding in the proof)
Gotta blame it on my juice (blame it on my juice)`,
    translate: 
    `Mirror, mirror on the wall
거울아, 거울아
Don't say it, 'cause I know I'm cute (ooh, baby)
말하지 마, 왜냐하면 내가 귀여운 건 나도 알아
Louis down to my drawers
내 옷장은 루이비통으로 가득 차 있어
LV all on my shoes (ooh, baby)
신발도 다 루이비통이지
I be drippin' so much sause
난 매력이 넘쳐 흘러 
Got a bitch lookin' like RAGU (ooh, baby)
마치 RAGU 소스처럼 보일지도 몰라
Lit up like a crystal ball
크리스탈 볼처럼 반짝거려
That's cool, baby, so is you
멋있지, 너도 멋져
That's how I roll
난 이런 사람이야

If I'm shinin', everybody gonna shine (yeah, I'm goals)
내가 빛난다면, 모두가 빛날 거야
I was born like this, don't even gotta try (now you know)
난 이렇게 태어났어, 노력할 필요가 없지
I'm like chardonnay, get better over time (so you know)
난 마치 샤르도네 와인같아, 시간이 지날수록 좋아져
Heard you say I'm not the baddest, bitch, you lied
이래도 내가 별로라고? 에이 거짓말 마

It ain't my fault that I'm out here gettin' loose
내가 느슨한 건 내 잘못이 아냐
Gotta blame it on the Goose
구스를 탓해
Gotta blame it on my juice, baby
나의 매력을 탓해
It ain't my fault that I'm out here makin' news
내가 이렇게 화제가 되는 건 내 탓이 아니야
I'm the pudding in the proof
날 맛봐야 알겠니
Gotta blame it on my juice
나의 매력을 탓해

No, I'm not a snack at all
난 과자가 아니야
Look, baby, I'm the whole damn meal (ooh, baby)
baby, 난 완벽한 식사라구
David you ain't bein' slick
데이비드, 넌 능숙하지 않지
Don't dare try to cop a feel (ooh, baby)
그러니 날 만지려고 하지마
The juice ain't worth the squeeze
짜낼 가치가 없어
If the juice don't look like this (like this, like this, like this)
나처럼 멋있지 않다면 말야
Hold up, nigga, please
잠깐만, 너네, 제발
Don't make me have to take your bitch (how I roll)
너의 여자들을 내가 데려가게 만들지 마

If I'm shinin', everybody gonna shine (yeah, I'm goals)
내가 빛난다면, 모두가 빛날 거야
I was born like this, don't even gotta try (now you know)
난 이렇게 태어났어, 노력할 필요가 없지
I'm like chardonnay, get better over time (so you know)
난 마치 샤르도네 와인같아, 시간이 지날수록 좋아져
Heard you say I'm not the baddest, bitch, you lied
이래도 내가 별로라고? 에이 거짓말 마

It ain't my fault that I'm out here gettin' loose
내가 느슨한 건 내 잘못이 아냐
Gotta blame it on the Goose
구스를 탓해
Gotta blame it on my juice, baby
나의 매력을 탓해
It ain't my fault that I'm out here makin' news
내가 이렇게 화제가 되는 건 내 탓이 아냐
I'm the pudding in the proof
날 맛봐야 알겠니
Gotta blame it on my juice
내 매력을 탓해

Somebody come get this man
누가 이 남자 좀 데려가
I think he got lost in my DMs, what? My DMs, what?
내 생각엔 그가 내 메세지에 빠진 것 같아, 내 메세지에, 뭐?
More than friends
친구 이상 말야
What you want me to say?
내가 무슨 말을 하길 바라?

It ain't my fault that I'm out here gettin' loose
내가 느슨한 건 내 잘못이 아냐
Gotta blame it on the Goose
구스를 탓해
Gotta blame it on my juice, baby
내 매력을 탓해
It ain't my fault that I'm out here makin' news
내가 이렇게 화제가 되는 건 내 탓이 아니야
I'm the pudding in the proof
날 맛봐야 알겠니
Gotta blame it on my juice
내 매력을 탓해`
}

const setSeedData = async () => {
    await Popsong.deleteMany({});
    const data = new Popsong(dummy);
    await data.save();
}

setSeedData().then(() => mongoose.connection.close());