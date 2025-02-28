import Colors from "./colors";
import Style from "./style";
import { Text, View } from "lvgljs-ui";
import React from "react";

const PIXEL = 4;

interface Message {
  from: string;
  content: string;
}

const messages: Message[] = [
  {
    from: "Ben",
    content:
      "I swear to everything holy, if I find out you two have wasted one more second of company time on this nonsense, I'm going to lose it.",
  },
  {
    from: "Ben",
    content:
      "Do you even understand what a deadline is? Or do I need to code an app that reminds you every five minutes that you're supposed to be WORKING?",
  },
  {
    from: "Ben",
    content:
      "Let me guess, instead of actually coding features, you sat here making another completely useless sample conversation?",
  },
  {
    from: "Baxter",
    content:
      "Okay, technically, we didn't even write this one. We got ChatGPT to do it. So, if you think about it, we actually automated part of our job.",
  },
  { from: "Zuni", content: "Yeah. Efficiency." },
  {
    from: "Ben",
    content:
      "EFFICIENCY?! You wasted time making a bot generate more wasted time!",
  },
  {
    from: "Baxter",
    content:
      "We had to make sure ChatGPT could handle angry bosses. Turns out, it's pretty good at it.",
  },
  { from: "Zuni", content: "Yeah, solid performance." },
  {
    from: "Ben",
    content: "STOP COMPLIMENTING THE AI AND START DOING YOUR JOBS!",
  },
  {
    from: "Ben",
    content:
      "You two are unbelievable. I should've hired literally ANYONE else.",
  },
  {
    from: "Baxter",
    content:
      "But then who would give you the authentic, frustrating employee experience?",
  },
  {
    from: "Zuni",
    content: "Yeah, think of all the sample messages you'd miss out on.",
  },
  {
    from: "Ben",
    content:
      "THAT'S IT. I'm actually considering firing both of you and replacing you with-",
  },
  { from: "Ben", content: "...No. No, I refuse to say it." },
  {
    from: "Ben",
    content:
      "But damn it, I think ChatGPT might actually be a better employee than both of you.",
  },
  {
    from: "Baxter",
    content:
      "So, uh, while we're on the topic of employment stuff... I was thinking-totally unrelated to being fired, obviously-could I maybe take, like, six weeks of paid leave?",
  },
  {
    from: "Ben",
    content: "ARE YOU OUT OF YOUR MIND? SIX WEEKS? SIX?! WEEKS?!",
  },
  {
    from: "Ben",
    content:
      "YOU DON'T EVEN WORK SIX MINUTES IN A ROW WITHOUT SLACKING OFF! WHY WOULD I PAY YOU TO BE EVEN MORE USELESS THAN YOU ALREADY ARE?!",
  },
  {
    from: "Baxter",
    content:
      "I just think a well-rested employee is a productive employee, you know?",
  },
  {
    from: "Ben",
    content:
      "A WELL-RESTED EMPLOYEE?! YOU SPEND HALF YOUR WORKDAY MAKING COFFEE!",
  },
  {
    from: "Ben",
    content:
      "DO YOU KNOW HOW MUCH COFFEE YOU DRINK? I ACTUALLY DID THE MATH! THE COMPANY SPENDS MORE ON YOUR COFFEE HABIT THAN ON OUR SERVER COSTS!",
  },
  {
    from: "Ben",
    content:
      "AND THAT'S JUST THE START! I CAN'T REMEMBER THE LAST TIME I WALKED INTO THE OFFICE AND YOU WERE AT YOUR DESKS! YOU'RE ALL EITHER BUILDING LEGO, DOODLING ON THE WHITEBOARD, OR HAVING SOME POINTLESS DISCUSSION ABOUT WHETHER A HOTDOG IS A SANDWICH!",
  },
  { from: "Zuni", content: "It's not, by the way." },
  {
    from: "Ben",
    content:
      "I DO NOT CARE, ZUNI. AND WHILE WE'RE AT IT, WHY-WHY-DO PEOPLE THINK IT'S OKAY TO WALK AROUND THE OFFICE BAREFOOT?!",
  },
  {
    from: "Ben",
    content:
      "THIS ISN'T SOME BULLSHIT HIPPIE COMMUNE. THIS IS A BUSINESS. IF I SEE ONE MORE PERSON PADDLING AROUND THE OFFICE LIKE WE'RE IN SOME KIND OF BEACH RESORT, I AM GOING TO LOSE IT!",
  },
  {
    from: "Baxter",
    content:
      "Okay, but, hear me out-maybe the problem isn't us, maybe the problem is your management style.",
  },
  {
    from: "Ben",
    content: "MY MANAGEMENT STYLE?! OH, YOU WANNA TALK ABOUT MANAGEMENT STYLE?",
  },
  {
    from: "Ben",
    content:
      "FINE. HERE'S MY NEW MANAGEMENT STYLE: NO MORE LEGOS. NO MORE WHITEBOARD SCRIBBLES. NO MORE COFFEE. NO MORE BARE FEET. AND DEFINITELY, ABSOLUTELY, NO SIX WEEKS OF PAID LEAVE.",
  },
  { from: "Zuni", content: "Yikes. Sounds kind of toxic, honestly." },
  {
    from: "Ben",
    content:
      "TOXIC? I'LL TELL YOU WHAT'S TOXIC-THE FACT THAT I'M BASICALLY PAYING YOU TWO TO TURN THIS OFFICE INTO A FUCKING DAYCARE!",
  },
  { from: "Baxter", content: "So... is that a no on the leave request?" },
  {
    from: "Ben",
    content:
      "AND ANOTHER THING-THE MESS! DO YOU TWO EVEN REALIZE HOW MUCH TRASH YOU LEAVE EVERYWHERE?! I TRY TO KEEP THIS OFFICE NEAT. I WIPE DOWN MY DESK. I ORGANIZE MY FILES. I STRAIGHTEN THE CHAIRS AT THE END OF THE DAY LIKE A FUNCTIONING ADULT.",
  },
  {
    from: "Ben",
    content:
      "BUT YOU TWO? IT’S LIKE A TORNADO MADE OF FOOD WRAPPERS, OLD CLOTHES, AND RANDOM LEGO PIECES SWEEPS THROUGH HERE EVERY SINGLE DAY.",
  },
  {
    from: "Ben",
    content:
      "AND FUCKING FILTHY FOOTPRINTS!!! DON’T GET ME STARTED ON THE BARE FEET AGAIN. I SWEAR, THE NEXT TIME I SEE SOMEONE WALKING AROUND THIS OFFICE BAREFOOT, I AM GOING TO START THROWING SHOES AT THEM.",
  },
  { from: "Ben", content: "YOU KNOW WHAT I HATE? BARE FEET." },
  { from: "Ben", content: "YOU KNOW WHAT ELSE I HATE? COFFEE." },
  { from: "Ben", content: "AND FUN." },
  { from: "Ben", content: "AND CREATIVITY." },
  {
    from: "Ben",
    content:
      "YOU TWO KEEP FORGETTING WHY YOU’RE HERE. YOU’RE NOT HERE TO ‘EXPRESS YOURSELVES.’ YOU’RE NOT HERE TO ‘ENJOY YOUR JOB.’ YOU’RE NOT HERE TO ‘MAKE SOMETHING MEANINGFUL.’",
  },
  {
    from: "Ben",
    content:
      "YOU ARE HERE TO BUILD ANOTHER SOUL-CRUSHING PIECE OF SOFTWARE THAT EXISTS FOR ONE REASON AND ONE REASON ONLY—TO MAKE MONEY.",
  },
  {
    from: "Ben",
    content:
      "THAT’S IT. THAT’S THE JOB. NO PASSION. NO ART. NO PURPOSE. JUST REVENUE. ACCEPT IT.",
  },
  {
    from: "You",
    content: "Okay, okay, everyone, let’s just take a deep breath.",
  },
  {
    from: "Ben",
    content:
      "NO. NO DEEP BREATHS. NO ‘TRYING TO UNDERSTAND EACH OTHER.’ I REFUSE TO PARTICIPATE IN THIS ‘POSITIVE COMMUNICATION’ NONSENSE.",
  },
  { from: "Zuni", content: "Sounds like someone could use a deep breath." },
  {
    from: "Ben",
    content:
      "I’M GOING TO FIRE YOU BOTH AND REPLACE YOU WITH A ROCK AND A CALCULATOR.",
  },
];

const style = {
  messageUserYou: {
    // "You" name - aligned right.
    "font-size": 12,
    "text-color": Colors.dark,
    width: "100%",
    "text-wrap": 1,
    "padding-top": PIXEL * 2,
    "padding-bottom": -PIXEL,
    "text-align": "right",
  },
  messageUserOther: {
    // Other user's name - aligned left.
    "font-size": 12,
    "text-color": Colors.dark,
    width: "100%",
    "text-wrap": 1,
    "padding-top": PIXEL * 2,
    "padding-bottom": -PIXEL,
  },
  messageBodyYou: {
    // Message sent by "You" - aligned right.
    "font-size": 16,
    "text-color": Colors.light,
    width: "100%",
    "text-wrap": 1,
    "text-align": "right",
  },
  messageBodyOther: {
    // Message sent by others - aligned left.
    "font-size": 16,
    "text-color": Colors.light,
    width: "100%",
    "text-wrap": 1,
  },
};

export default function MessageApp() {
  return (
    <View style={Style.root}>
      <View style={{ ...Style.root, ...{ "row-spacing": 2 } }}>
        {messages.map((msg, index) => {
          const prevMsg = index > 0 ? messages[index - 1] : null;
          const showFrom = !prevMsg || prevMsg.from !== msg.from;

          return (
            <View key={index} style={Style.containerBlank}>
              {msg.from === "You" ? (
                <>
                  {showFrom && (
                    <Text style={style.messageUserYou}>{msg.from}</Text>
                  )}
                  <View style={Style.boxMessage}>
                    <Text style={style.messageBodyYou}>{msg.content}</Text>
                  </View>
                </>
              ) : (
                <>
                  {showFrom && (
                    <Text style={style.messageUserOther}>{msg.from}</Text>
                  )}
                  <View style={Style.boxMessage}>
                    <Text style={style.messageBodyOther}>{msg.content}</Text>
                  </View>
                </>
              )}
            </View>
          );
        })}
      </View>
      <View style={{ ...Style.boxBlack, height: "40px", padding: PIXEL * 3 }}>
        <Text style={Style.textSmallWhite}>
          Message sending currenty not suported. haha.
        </Text>
      </View>
    </View>
  );
}
