import TextDisplay from "../helper/TextDisplay";

export default function Description() {
  return (
    <p className="tracking-wider leading-relaxed text-base ">
        I work at Patreon, where we help creative folks get paid and interact with fans. 
        Over the last year or so, I worked on redesigning our mobile app while we rebranded. 
        I’m particularly happy with how the new <TextDisplay text="Podcast Player" image="/smoke.jpg" /> we worked on turned out. 
    </p>
  )
}
