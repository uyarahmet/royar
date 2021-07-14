import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineInstagram} from 'react-icons/ai'

export default function Footer(){
  return (
    <footer>
       		<div class="social" style={{position: 'relative', left: '33%', top: '35px'}}>
       			<ul>
              <li><a href="https://github.com/uyarahmet"><AiOutlineGithub color="black"/></a></li>
              <li><a href="https://www.linkedin.com/in/ahmet-uyar-8aa306198/"><AiOutlineLinkedin color="black"/></a></li>
              <li><a href="https://twitter.com/UYRAHMET"><AiOutlineTwitter color="black"/></a></li>
              <li><a href="https://www.instagram.com/uyaar/"><AiOutlineInstagram color="black"/></a></li>
  			   </ul>
        </div>
     </footer>
  )
}
