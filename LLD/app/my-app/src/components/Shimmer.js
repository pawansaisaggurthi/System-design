

const Shimmer = () => {

    console.log("came")

    return Array(15).fill(0).map((n, i) => (
       <div key={i} className="border border-black rounder-lg p-4 m-4">
            <div className="h-64 w-64 bg-gray-200"></div>
        </div>
      
    ))
}


export default Shimmer;