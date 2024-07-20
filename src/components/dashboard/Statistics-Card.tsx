import NumberTicker from "@/components/magicui/number-ticker";

function StatisticsCard({ Icon, value, description }: { Icon: any, value: number, description: string }) {
  return (
    <div className="border p-6 rounded-md flex flex-col hover:bg-accent dark:hover:bg-accent/20 transition cursor-default">
      <Icon className="size-8 stroke-muted-foreground" strokeWidth={1} />
      <NumberTicker className="text-3xl font-bold mt-1 text-secondary-foreground" value={value}></NumberTicker>


      <p className="mt-1 text-muted-foreground">{description}</p>
    </div>
  )
}

export default StatisticsCard