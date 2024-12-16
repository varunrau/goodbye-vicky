export function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-6">
        <div className="flex gap-3">
          <img 
            src="https://ca.slack-edge.com/E063KNMBD8W-U0285RZMMU6-6d41a6203044-512"
            alt="Profile"
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">Penny</span>
              <span className="text-sm text-muted-foreground">12:34 PM</span>
            </div>
            <p>vicky i am stuck at notion without you and i would like some help!! i remember when people ask me how things are going when i first joined notion and i&apos;d tell them, &quot;the company is more serious than i expected but my onboarding buddy is great!!&quot; and you were the one who made WIT a reality after you me and alicia would muse about how there&apos;s no community for eng women every time we hang out ♥️ notion will be so different without you. i will be very lonely. but i&apos;m excited for your next chapter!! have lots of fun everywhere you go like you always do and maybe we&apos;ll get to work together again in a next life/company, that&apos;d be the dream!!</p>
            <div className="relative w-full max-w-[400px] pt-[56.25%]">
              <img
                src="/penny.png"
                alt="Penny"
                className="absolute inset-0 h-full w-full rounded-lg border bg-card object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <img 
          src="https://ca.slack-edge.com/E063KNMBD8W-U027CC45LC9-6d9c7c41e311-512"
            alt="Profile"
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">Eddie</span>
              <span className="text-sm text-muted-foreground">12:35 PM</span>
            </div>
            <p>Messsage from Eddie</p>
            <div className="relative w-full max-w-[400px] pt-[56.25%]">
              <video 
                controls 
                className="absolute inset-0 h-full w-full rounded-lg border bg-card object-cover"
                poster="/placeholder.svg?height=225&width=400"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <img 
          src="https://ca.slack-edge.com/E063KNMBD8W-UNJEC5FGU-fd485da45628-512"
            alt="Profile"
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">Ryo</span>
              <span className="text-sm text-muted-foreground">12:36 PM</span>
            </div>
            <p>Message from Victor</p>
            <div className="relative w-full max-w-[400px] pt-[56.25%]">
              <video 
                controls 
                className="absolute inset-0 h-full w-full rounded-lg border bg-card object-cover"
                poster="/placeholder.svg?height=225&width=400"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <img 
            src="https://ca.slack-edge.com/E063KNMBD8W-U016W7KJ38F-fe686db9f302-512"
            alt="Profile"
            className="h-10 w-10 shrink-0 rounded-lg object-cover"
          />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">vr</span>
              <span className="text-sm text-muted-foreground">12:37 PM</span>
            </div>
            <p>Message from vr</p>
            <div className="relative w-full max-w-[400px] pt-[56.25%]">
              <video 
                controls 
                className="absolute inset-0 h-full w-full rounded-lg border bg-card object-cover"
                poster="/placeholder.svg?height=225&width=400"
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
