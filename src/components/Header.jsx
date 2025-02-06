
import chef_claude_icon from "../../assets/images/chef-claude-icon.png"

export default function Header(){

    return (
        <header>
            <img src={chef_claude_icon} alt="Chef Claude icon" />
            <span>Chef Claude</span>
        </header>
    )
}