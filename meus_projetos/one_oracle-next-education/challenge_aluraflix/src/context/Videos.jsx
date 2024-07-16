import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const VideosContext = createContext();
VideosContext.displayName = "Videos";

const url = "http://localhost:3000/videos";

export default function VideosProvider({ children }) {
  const [videos, setVideos] = useState([]);
  const [frontend, setFrontend] = useState([]);
  const [backend, setBackend] = useState([]);
  const [mobile, setMobile] = useState([]);
  const [videoToEdit, setVideoToEdit] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadVideos = async () => {
    const { data } = await axios.get(url);
    if (data) {
      setVideos(data);

      setFrontend(() => {
        let frontendVideos = data.filter(
          (video) => video.category === "frontend"
        );
        return frontendVideos;
      });

      setBackend(() => {
        let backendVideos = data.filter(
          (video) => video.category === "backend"
        );
        return backendVideos;
      });

      setMobile(() => {
        let mobileVideos = data.filter((video) => video.category === "mobile");
        return mobileVideos;
      });
    }
  };

  useEffect(() => {
    loadVideos();
  }, [videos]);

  return (
    <VideosContext.Provider
      value={{
        videos,
        setVideos,
        frontend,
        setFrontend,
        backend,
        setBackend,
        mobile,
        setMobile,
        loadVideos,
        isModalOpen,
        setIsModalOpen,
        videoToEdit,
        setVideoToEdit,
      }}
    >
      {children}
    </VideosContext.Provider>
  );
}

export function useVideosContext() {
  const {
    videos,
    setVideos,
    frontend,
    setFrontend,
    backend,
    setBackend,
    mobile,
    setMobile,
    isModalOpen,
    setIsModalOpen,
    videoToEdit,
    setVideoToEdit,
  } = useContext(VideosContext);

  const addNewVideo = async (newVideo) => {
    const { data: newVideoToAdd } = await axios.post(url, {
      title: newVideo.title,
      img: newVideo.img,
      link: newVideo.link,
      category: newVideo.category,
    });

    setVideos((prevState) => {
      return [...prevState, newVideoToAdd];
    });
  };

  const updateVideo = async (id, video) => {
    const { data: updatedVideo } = await axios.put(`${url}/${id}`, {
      title: video.title,
      img: video.img,
      link: video.link,
      category: video.category,
    });

    setVideos((prevState) => {
      const video = prevState.map((video) => {
        return video.id === id
          ? { ...video, title: updatedVideo.title }
          : video;
      });
      return [...video];
    });
    alert("Vídeo atualizado com sucesso");
  };

  const removeVideo = async (id) => {
    await axios.delete(`${url}/${id}`);

    setVideos((prevState) => {
      const video = prevState.filter((video) => video.id !== id);
      return [...video];
    });
  };

  return {
    videos,
    frontend,
    setFrontend,
    backend,
    setBackend,
    mobile,
    setMobile,
    addNewVideo,
    updateVideo,
    removeVideo,
    isModalOpen,
    setIsModalOpen,
    videoToEdit,
    setVideoToEdit,
  };
}
