import Image from "next/image";

const GrowYourCollectionSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#FFFBE8] to-[#FFFFFF] p-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Grow your collection
          </h2>
          <p className="text-gray-700 mb-6">
            Exim neque massa porta adipiscing elit. Sem libero id faucibus nibh
            amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
            sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
            proin neque placerat at bibendum quam tellus.
          </p>
          <ul className="text-gray-700 space-y-4">
            <li className="flex items-center">
              <span className="mr-2">🎯</span> Bibendum tellus
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span> Cras eget
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span> Dolor pharetra
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span> Amet, fringilla
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span> Amet nibh
            </li>
            <li className="flex items-center">
              <span className="mr-2">🎯</span> Sed velit
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center relative mt-8 md:mt-0">
          <div className="relative">
            <Image
              src="/images/imgcol.png"
              alt="Collection Image 1"
              className="rounded-lg shadow-lg"
              width={500}
              height={300}
            />
            <Image
              src="/images/imgcol2.png"
              alt="Collection Image 2"
              className="absolute top-8 left-8 w-48 h-48 rounded-lg shadow-lg"
              width={192}
              height={192}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowYourCollectionSection;
