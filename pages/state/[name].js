import { useRouter } from "next/router";


export default function StateTemplate() {
  const router = useRouter();
  
  return (
    <div>
      {router.query.name}
    </div>
  )
}
