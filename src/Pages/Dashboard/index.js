import Card from "../../Components/Card"
import pitou from "../../assets/pitou.jpg"
import { BiUser, BsChat, CustomDiv, CustomMain, Footer, HamburgerMenu, MatchesUl, Title } from "./style"
import Menu from "../../Components/Menu"
import { useEffect} from "react"
import { useMatch } from "../../Providers/Match"
import { useLogin } from "../../Providers/Login"
import { Redirect } from "react-router-dom"
import { Link } from "react-router-dom"

const Dashboard = () =>{

    const {loggedUser, getMatch} = useMatch()
    const {user} = useLogin()
    const {matches} = loggedUser
    
    useEffect(()=>{
        getMatch()
    },[matches])
    
    //console.log(loggedUser)
    if(!user.accessToken || user.user.type !== "company"){
        return <Redirect to="/"/>
    }

    return (
        <>
        <CustomMain>
                <Menu/>
            <CustomDiv>
                {matches&&matches.length === 0 ? <Title>Nenhum Investidor</Title> : <Title>Investidores interessados na sua ideia</Title>}
                <MatchesUl>
                    {matches&&matches.length === 0 ?
                        <>
                        <div>
                        <h2>que tal melhorar o seu perfil?</h2>
                        <Link to={"/perfil"}>Perfil</Link>
                        </div>
                        </>
                        :
                       matches&&matches.map( match => <Card key={match.id} match={match}/>)
                    }
                </MatchesUl>
            </CustomDiv>
        </CustomMain>
        <Footer>
            <div>
                <BiUser/>
            </div>
            <BsChat/>
            <HamburgerMenu/>
        </Footer>
        </>
    )
}

export default Dashboard