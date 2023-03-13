type GameResultType = {
    id: number,
    abbreviation: string,
    city: string,
    conference: string,
    division: string,
    full_name: string,
    match_results: string[],
    avg_pts_scored: number,
    avg_pts_conceded: number
}

export default GameResultType;