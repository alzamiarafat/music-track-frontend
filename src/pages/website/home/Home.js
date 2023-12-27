import React from 'react';
import './_home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophone, faSearch } from '@fortawesome/free-solid-svg-icons';
import ApiService from "../../../services/api.service";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { setSearchResults } from "../../../store/reducer/search-result";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [musics, setMusics] = useState([]);

    const getMusics = () => {
        ApiService.get(`/musics`).then(res => {
            if (res.data.data.length) setMusics([...res.data.data]);
        }).catch(err => {
            console.log(err);
        })
    }

    const searchTextHandle = (music) => {
        dispatch(setSearchResults(music))
        const link = `/search/${music._id}`;
        navigate(link);
    }

    return (
        <>
            <div className="container">
                <div className="row height d-flex justify-content-center align-items-center">
                    <div className="col-md-6">
                        <div className="form">
                            <FontAwesomeIcon className='fa-search' icon={faSearch} />
                            <input type="text" onKeyPress={getMusics} className="form-control form-input" placeholder="Search anything..." />
                            <span className="left-pan">
                                <FontAwesomeIcon id='mic' icon={faMicrophone} />
                            </span>
                        </div>
                        <div className="absolute mt-2">
                            <div className="list-group">
                                {
                                    musics.length ? musics.map((music, index) =>
                                        <button type="button" key={index} onClick={() => searchTextHandle(music)} className="list-group-item list-group-item-action">{music.title}</button>) : ''
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Outlet></Outlet>
        </>
    )
}