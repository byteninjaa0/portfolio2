function Post(){
    return(
        <a href="/blogdetails">
        <div style={{display:"flex",marginLeft:"1rem",marginRight:"1rem",gap:"2rem",marginTop:"2rem"}}>

        <div>
        <span style={{fontWeight:"500",fontSize:"1.1rem"}}>The job market i use to know</span>
        <p style={{lineHeight:"1.1",fontSize:".9rem",marginTop:"0.3rem",color:"#6b6f72"}}>how i developed my own UNIX like OS with minimal commands , what was the motivation , how i found my resources...</p>
        <span style={{fontSize:"0.7em"}}>
            <time dateTime="2024-06-11T00:00:00.000Z"> Jun 11, 2024 </time>
        </span>
        </div>
        <img src="https://images.unsplash.com/photo-1515973069-1e40b62f107f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3wzNjAwOTd8MHwxfHNlYXJjaHwyNnx8aW50ZXJ2aWV3fGVufDB8MHx8fDE3MTgwNTgzNjJ8MA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080" loading="eager" alt="I've got news to share alongside a personal vent at the current state of things for devs like me trying to move up with their career."     style={{ width: "300px",borderRadius:"0.7rem", height: "100px", objectFit: "cover" }}
  ></img>
        </div>
        </a>
    )

}
export default Post;