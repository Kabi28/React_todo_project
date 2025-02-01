
const Pagination = ({setCurrPage,tododata})=>{

    const pages = []

    

    for(let i=1;i<=Math.ceil(tododata.length/5);i++){
        pages.push(i)
    }

        return(
            <>
            {
                pages.map((item,index)=>(
                    <button key={index} onClick={()=>setCurrPage(item)} className="pageBtn">{index+1}</button>
                   
                ))
            }
            </>
        )
}

export default Pagination;