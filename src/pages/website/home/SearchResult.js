import React from 'react';
import './_home.css';
import './_search.css';
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ApiService from "../../../services/api.service";
import { useParams } from "react-router-dom";

export const SearchResult = () => {
    const [music, setMusic] = useState([]);
    const [musicId, setMusicId] = useState([]);
    const [allMusics, setAllMusics] = useState([]);
    let { searchResults } = useSelector(state => state.searchResult);

    const getMusics = () => {
        ApiService.get(`/musics`).then(res => {
            if (res.data.data.length) setAllMusics([...res.data.data]);
        }).catch(err => {
            console.log(err);
        })
    }

    const params = useParams();
    useEffect(() => {
        getMusic();
        setMusic(searchResults);
        getMusics();
    }, [searchResults]);

    const getMusic = () => {
        ApiService.get(`/musics/${params.id}`).then(res => {
            if (res.data.data.length) setMusic(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-7">
                        <iframe width="750" height="550" src={music.url}></iframe>
                    </div>
                    <div className="col-5 video-overflow">
                        <div className="card">
                            {
                                allMusics.length ? allMusics.map((music, index) =>
                                    <>
                                        <div className="row mt-3 p-2 pb-0">
                                            <div className="col-4">
                                                <iframe width="150" height="80" src={music.url}></iframe>
                                            </div>
                                            <div className="col-sm-8">
                                                <h5 className="card-title">{music.title}</h5>
                                                <p className="card-text">{music.description}</p>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </>
                                ) : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}