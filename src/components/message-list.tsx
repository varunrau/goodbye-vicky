export function MessageList() {
  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-6">
        <div className="flex gap-3">
          <div className="h-10 w-10 shrink-0 rounded-lg bg-yellow-400" />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">Penny</span>
              <span className="text-sm text-muted-foreground">12:34 PM</span>
            </div>
            <p>Message from Penny</p>
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
          <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-400" />
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
          <div className="h-10 w-10 shrink-0 rounded-lg bg-green-400" />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">Victor</span>
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
          <div className="h-10 w-10 shrink-0 rounded-lg bg-pink-400" />
          <div className="flex-1 space-y-2">
            <div className="flex items-baseline gap-2">
              <span className="font-semibold">Ekin</span>
              <span className="text-sm text-muted-foreground">12:37 PM</span>
            </div>
            <p>Message from Ekin</p>
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
