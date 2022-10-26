

export default function Header() {
  return (
    <div style={{}} className="ui fixed menu">
        <div className="ui container center">
            <a href="/"><h2 style={{color : "royalblue",paddingTop : "0.8rem"}}>BigShop</h2></a>
            <div class="right menu">
                <div class="ui icon input">
                    <i className="large blue shop icon"></i>
                </div>
                <div class="item">
                <div class="ui icon input">
                    <input type="text" placeholder="Search..." />
                    <i class="search link icon"></i>
                </div>
                </div>
                <a style={{color : "red", fontWeight : "bold", fontSize : "medium"}} class="ui item">
                Logout
                </a>
            </div>
        </div>
    </div>
    );
}
