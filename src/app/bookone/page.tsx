export default function BookOnePage() {
  return (
    <main className="hover:bg-blue-400/20 flex flex-row justify-around h-screen max-w-screen">
      
      <div className="hover:bg-blue-400/40 w-1/3 order-2">
      <p className="text-[200%] font-bold text-center mt-[15%]">
          Book One:
        </p>
        <p className="text-[300%] font-bold text-center mt-[15%]">
          Genesis of Gleipnir
        </p>
      </div>
      <br></br>
      
      <div className="hover:bg-blue-400/10 w-1/3 order-1">
        <p className="text-lg max-w-prose text-center">
            Summary for Book One: Genesis of Gleipnir
        </p>
      </div>

      <div className="hover:bg-blue-400/40 w-1/3 order-3">

      </div>
      
    </main>
  );
}