import React from "react";
import { useRouter } from "next/router";
import Supabase from "@/components/Supabase/Supabase";
import Details from "@/components/Details/Details";

const Index = () => {
  const router = useRouter();
  const id = router.query?.id;
  const [item, setItem] = React.useState<any | null>(null);

  React.useEffect(() => {
    const fetchCarDetails = async () => {
      if (id) {
        const { data, error } = await Supabase.from("cars")
          .select()
          .eq("id", id)
          .single()
        setItem(data);
        console.log(error, "err");
      }
    };
    fetchCarDetails();
  }, [id]);
  
  return (
    <main className="bg-[#F6F7F9]">
      <Details item={item}/>
    </main>
  );
};

export default Index;
