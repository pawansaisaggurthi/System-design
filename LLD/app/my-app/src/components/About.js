import { LANG } from "../Utils/LangConstant";

const About = ({lang}) => {

    const data = LANG[lang]

    return (
        <div>
            <div className="text-6xl py-4">{data.title}</div>
            <div className="text-2xl py-2">{data.header}</div>
            <div className="text-xl py-2">{data.subheader}</div>
            <p>{data.description}</p>
        </div>
    )
}

export default About;