import Image from "next/image";
import GridOption from "@/components/GridOption";

export default function Home() {
  return (
    <main className="">
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-3 gap-6 m-6">
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-pink-200 h-full md:h-32"
        />
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/8ko"
          className="bg-blue-200 col-span-2 row-span-2"
        />
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/szu"
          className="bg-pink-400 col-span-2 row-span-2"
        />
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/n7r"
          className="bg-pink-200 h-full row-span-2"
        />
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/pj2"
          className="bg-green-200 h-64"
        />{" "}
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/1dy"
          className="bg-violet-400 h-full col-span-2 md:h-32"
        />
        <GridOption
          title="Sweet gifts for less"
          image="https://links.papareact.com/pj2"
          className="bg-green-200"
        />{" "}
      </div>
    </main>
  );
}
