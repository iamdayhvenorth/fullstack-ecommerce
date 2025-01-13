import CategoryCard from "./CategoryCard";

export default function Categories() {
  return (
    <section className="py-6">
      <div className="w-full max-w-[1100px] mx-auto py-5 px-4">
        <div>
          <h1 className="text-center text-[2rem] font-semibold leading-10 text-dark my-3 ">
            Shop with Categories
          </h1>

          <div>
            <CategoryCard />
          </div>
        </div>
      </div>
    </section>
  );
}
