import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Platform {
    id: number,
    name: string,
    slug: string
}

export interface Game {
    id: number,
    name: string,
    background_image: string,
    parent_platforms: {platform: Platform}[] //array of objects, which each bject has a particular platform of type platform
}

interface FetchGamesResponse {
    count: number;
    results: Game[]
}

const useGames = () => {
    
    const [games, setGames] = useState<Game[]>([]);
    const [error, setErrors] = useState('');
    
    useEffect(() => {
      const controller = new AbortController();

      apiClient.get<FetchGamesResponse>('/games', {signal: controller.signal })
             .then(res => setGames(res.data.results))
             .catch(err => {
                if(err instanceof CanceledError) return;
                setErrors(err.message)});

      return () => controller.abort()

  }, []);

  return {games, error};

}

export default useGames