/* eslint-disable object-shorthand */
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import CTA from "../CTA";
import ExportContext from "../../contexts/Context";

function HomeAdmin(props) {
  const { language, media } = useContext(ExportContext.Context);
  const [imageLink, setImageLink] = useState("");
  const [imageAlt, setImageAlt] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [titleGreenPart, setTitleGreenPart] = useState("");
  const [cta, setCta] = useState("");
  const [bgImage, setBgImage] = useState("");
  const [bgImageAlt, setBgImageAlt] = useState("");
  const [id, setId] = useState("");
  const [imgId, setImgId] = useState("");
  const [BimgId, setBimgId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      id: id,
      imageLink: imageLink,
      imageAlt: imageAlt,
      title: title,
      text: text,
      titleGreenPart: titleGreenPart,
      cta: cta,
      bgImage: bgImage,
      bgImageAlt: bgImageAlt,
      imgId: imgId,
      BimgId: BimgId,
    };
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/homes`, data)
      .then(() => {
        console.warn(`${imgId} ${BimgId} ${titleGreenPart} ${cta}`);
        console.warn("Yes !");
      })
      .catch(() => {
        console.warn(`${imgId} ${BimgId} ${titleGreenPart} ${cta}`);
        console.warn("No !");
      });
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/homes/${language.id}`)
      .then((response) => {
        setId(response.data.id);
        setImgId(response.data.imgId);
        setBimgId(response.data.BimgId);
        setTitle(response.data.title);
        setTitleGreenPart(response.data.title_green_part);
        setText(response.data.text);
        setCta(response.data.CTA_label);
        setBgImage(response.data.image_link_background);
        setBgImageAlt(response.data.image_alt_background);
        setImageLink(response.data.image_link);
        setImageAlt(response.data.image_alt);
      })
      .catch((error) => {
        console.warn(error);
      });
  }, [language]);

  return (
    <div className="bg-white bg-cover flex flex-row justify-center w-full h-full">
      <form className="flex flex-col h-full w-2/5 justify-center">
        <div className="flex flex-col h-full w-full justify-center">
          <div className="flex flex-col h-full w-full justify-center">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Titre
              <input
                value={title && title}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={title && title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Partie du titre souligné en vert
              <input
                value={titleGreenPart}
                onChange={(e) => setTitleGreenPart(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={titleGreenPart}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Texte
              <input
                value={text && text}
                onChange={(e) => setText(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={text && text}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Nom du Call to action
              <input
                value={cta && cta}
                onChange={(e) => setCta(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={cta && cta}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image de fond
              <input
                value={bgImage && bgImage}
                onChange={(e) => setBgImage(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={bgImage && bgImage}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Alt de l&apos;image de fond
              <input
                value={bgImageAlt && bgImageAlt}
                onChange={(e) => setBgImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={bgImageAlt && bgImageAlt}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Image
              <input
                value={imageLink && imageLink}
                onChange={(e) => setImageLink(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={imageLink && imageLink}
              />
            </label>
          </div>
          <div className="flex flex-col">
            <label className="flex flex-col text-gray-900 font-bold mb-2 ml-6 mt-2 justify-center">
              Alt image
              <input
                value={imageAlt && imageAlt}
                onChange={(e) => setImageAlt(e.target.value)}
                className="bg-gray-100 border-2 border-gray-300 rounded-lg px-2 py-1 w-4/5 ml-6"
                type="text"
                placeholder={imageAlt && imageAlt}
              />
            </label>
          </div>
          <div className="flex justify-center mt-8">
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
      <div
        className="bg-white bg-cover flex flex-col justify-center  py-16 lg:max-w-full lg:flex-row"
        style={{
          backgroundImage: `url(${bgImage && bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <div
          className="flex flex-col justify-center items-center lg:w-1/2 lg:m-6 lg:items-start text-left"
          id={props.status === 1 ? "trytorotate" : ""}
        >
          <h1 className="justify-center text-4xl lg:text-3xl font-bold mt-6 mb-6 last-child">
            {title && title}
            <br />
            <span className="underline decoration-8 decoration-green-400">
              {titleGreenPart && titleGreenPart}
            </span>
          </h1>
          <h2 className=" lg:center text-left text-xl">{text && text}</h2>
          <CTA label={`${cta && cta} ${media ? "💬" : ""}`} />
        </div>
        <div className="lg:w-1/2 flex justify-center lg:flex-row-reverse ">
          <img
            className="w-96 h-auto mt-6 lg:flex lg:justify-center hidden"
            src={imageLink && imageLink}
            alt={imageAlt && imageAlt}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeAdmin;
