import Meteors from "../magicui/meteors";

export default function DashboardBanner({ userName }: { userName: string }) {
  const time = currentTime();

  return (
    <div className="border p-6 rounded-md flex col-span-2 justify-center items-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <img src="/background.svg" className="w-full opacity-60 dark:opacity-10" alt="bg" />
      </div>
      {`¡${time}, ${userName.split(' ')[0]}! ¿Que harás hoy?`}

      <Meteors number={30} />
    </div>
  )
}


function currentTime() {
  const date = Date.now();
  const hours = new Date(date).getHours();

  if (hours >= 18) return 'Buenas noches'
  if (hours >= 12) return 'Buenas tardes'
  if (hours >= 5) return 'Buenos días'
  else return 'Buenas noches'
}