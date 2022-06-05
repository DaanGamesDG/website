import type { NextApiRequest, NextApiResponse } from "next";
import type { AnimeList, AnimeListRaw, AnimeApiResponse } from "../../lib/types";
import axios from "axios";
import { getQuery } from "../../lib/utils";

const Anime = async (req: NextApiRequest, res: NextApiResponse<AnimeApiResponse>) => {
	const username = getQuery(req.query.username ?? "DaanGamesDG");

	const response = await axios.get<AnimeListRaw[]>(`https://myanimelist.net/animelist/${username}/load.json?status=7&offset=0`).catch(() => null);
	if (!response) return res.status(200).json({ list: [], username });

	const { data } = response;
	const list = data.map<AnimeList>((anime) => ({
		title: anime.anime_title,
		title_english: anime.anime_title_eng,
		genres: anime.genres.map((genre) => genre.name.toLowerCase()),
		rating: anime.score,
		status: anime.status,
		episodes: {
			watched: anime.num_watched_episodes,
			total: anime.anime_num_episodes
		},
		image: anime.anime_image_path,
		url: `https://myanimelist.net${anime.anime_url}`
	}));

	return res.status(200).json({ list, username });
};

export default Anime;
