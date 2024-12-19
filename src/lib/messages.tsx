import { ReactNode } from "react"

interface Message {
  id: number
  sender: string
  senderImage: string
  content: ReactNode
  timestamp: string
  images: string[]
}

export const messages: Message[] = [
    {
      id: 7,
      sender: "Karunya",
      senderImage: "https://ca.slack-edge.com/E063KNMBD8W-U02H6KXP9UJ-e831fbed4fc9-512",
      content: (
        <p>
          Vicky I&apos;m stuck on a really hard problem and I need your help! over my time at notion, I feel like I&apos;ve had a great time following in your footsteps — joining growth (best decision ever!), moving to NYC (also pretty fun!!), and being one of the few nyctinos to continue living in Manhattan (fun but expensive). I think this speaks to how cool you are and what a baller you are; I just want to be like you! I&apos;ll miss seeing you around the NYC office — it really won&apos;t be the same place without your laugh, your fun stories, and your kind heart &lt;3 while it&apos;ll be tough for us, I can only say that this new chapter sounds like the best time ever and I will follow along eagerly on insta. It goes without saying, but there&apos;s always a guest forkable link and unlimited snax at notion nyc waiting for you! Like penny, I hope we work together again one day (either in this life or some parallel universe, I&apos;ll take it~)
        </p>
      ),
      timestamp: "12:40 PM",
      images: ["/karunya.jpg"]
    },
    {
      id: 2,
      sender: "Eddie",
      senderImage: "https://ca.slack-edge.com/E063KNMBD8W-U027CC45LC9-6d9c7c41e311-512",
      content: (
        <p>
          I am stuck at Notion&apos;s getting started page that&apos;s localized in
          French. Maybe you have an onboarding checklist that can help me learn
          how to use Notion? Or maybe you have an audit log in the admin console
          that can help me see who created this template in this enterprise
          workspace so I can ask them for help?
          <br />
          Anyways let me know bc I am more blocked than these giant jenga blocks
        </p>
      ),
      timestamp: "12:35 PM",
      images: ["/eddie.jpg"],
    },
    {
      id: 3,
      sender: "Josh",
      senderImage:
        "https://ca.slack-edge.com/E063KNMBD8W-U0215HR7X40-bece43364e04-512",
      content:
        "good luck on the next adventure! You'll be missed. RIP OG Growth team 💪🏼",
      timestamp: "12:36 PM",
      images: [],
    },
    {
      id: 4,
      sender: "Ryo",
      senderImage:
        "https://ca.slack-edge.com/E063KNMBD8W-UNJEC5FGU-5f109b12acdd-512",
      content:
        "Be free, with all things you learned and cherish. Happy for you! ❤️",
      timestamp: "12:37 PM",
      images: [],
    },
    {
      id: 1,
      sender: "Penny",
      senderImage:
        "https://ca.slack-edge.com/E063KNMBD8W-U0285RZMMU6-6d41a6203044-512",
      content: (
        <p>
          vicky i am stuck at notion without you and i would like some help!! i
          remember when people asked me how things are going when i first joined
          notion and i&apos;d tell them, &ldquo;the company is more serious than
          i expected but my onboarding buddy is great!!&rdquo; and you were the
          one who made WIT a reality after you me and alicia would muse about
          how there&apos;s no community for eng women every time we hung out ♥️ 
          notion will be so different without you. i will be very lonely. but
          i&apos;m excited for your next chapter!! have lots of fun everywhere
          you go like you always do and maybe we&apos;ll get to work together
          again in a next life/company, that&apos;d be the dream!!
        </p>
      ),
      timestamp: "12:34 PM",
      images: ["/penny.png"],
    },
    {
      id: 5,
      sender: "Victor",
      senderImage:
        "https://ca.slack-edge.com/E063KNMBD8W-U027XSPPDN3-9b452474e8de-512",
      content: (
        <p>
          <s>Vicky I am stuck at Notion with Eddie and I would like some help!! JK!</s> But thank you for being the growth team member I was talking to and for bringing me to Notion. Thank you for having the patience to work through those 20 hacky variants with me to make them mutually exclusive, for collaborating on audit logs while I was one of the first to get COVID, and for sharing tea together. Knowing what an incredible developer and human being you are, Notion will be a little worse after you leave. I hope you enjoy your days off and spark some of your greatest creativity!
        </p>
      ),
      timestamp: "12:38 PM",
      images: ["/victor1.png", "/victor2.jpg"],
    },
    {
      id: 6,
      sender: "vr",
      senderImage: "https://ca.slack-edge.com/E063KNMBD8W-U016W7KJ38F-fe686db9f302-512",
      content: (
        <p>
          I consider myself very lucky that we got to work together. I&apos;m grateful for all that you&apos;ve done for the teams we&apos;ve been on together to help them succeed together. Whether it&apos;s raising problems that the team is facing, nurturing our team&apos;s culture, or looking out for new teammates, you&apos;ve always created a welcoming environment for us all. We&apos;re all going to miss you!! I hope you enjoy some well-deserved time off. Know that we&apos;re all still going to be here for you whenever you need us, just as you have been for us!
        </p>
      ),
      timestamp: "12:39 PM",
      images: [],
    },
  ];