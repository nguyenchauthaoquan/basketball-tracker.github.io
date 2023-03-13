import {GameBoardProps} from "../common/interfaces/props";
import React from "react";
import {Game} from "../common/models/Game";
import {Button, Card, Col, Row} from "antd";
import GameResultType from "../common/types/GameResultType";
import {Link} from "react-router-dom";

const _ = require("lodash");

const GamesBoard = ({games, teamIds, open, getGames}: GameBoardProps) => {
    const getAvgTeamScore = (teamId: number) => {
        return games.reduce((previousValue: number, currentValue: Game) => {
                if (currentValue.home_team.id === teamId) {
                    return previousValue + currentValue.home_team_score;
                }

                if (currentValue.home_team.id !== teamId) {
                    return previousValue + currentValue.visitor_team_score;
                }

                if (currentValue.visitor_team.id === teamId) {
                    return previousValue + currentValue.visitor_team_score;
                }

                if (currentValue.visitor_team.id !== teamId) {
                    return previousValue + currentValue.home_team_score;
                }

                return 0;
            }, 0)
    }

    const getGameResults = (teamId: number) => {
        return games.reduce((previousValue: string[], currentValue: Game) => {
            if (currentValue.home_team.id === teamId) {
                if (currentValue.home_team_score > currentValue.visitor_team_score) {
                    previousValue.push("W")
                } else if (currentValue.home_team_score < currentValue.visitor_team_score) {
                    previousValue.push("L")
                }
            }

            if (currentValue.visitor_team.id === teamId) {
                if (currentValue.visitor_team_score > currentValue.home_team_score) {
                    previousValue.push("W")
                } else if (currentValue.visitor_team_score < currentValue.home_team_score) {
                    previousValue.push("L")
                }
            }

            return previousValue
        }, [])
    }

    let teams: GameResultType[] = _.uniqBy(games.map((game: Game) => {
        let result;

        if (teamIds.includes(game.home_team.id)) {
            result = {
                id: game.home_team.id,
                abbreviation: game.home_team.abbreviation,
                city: game.home_team.city,
                conference: game.home_team.conference,
                division: game.home_team.division,
                full_name: game.home_team.full_name,
                name: game.home_team.name,
                match_results: getGameResults(game.home_team.id),
                avg_pts_scored: Math.floor(getAvgTeamScore(game.home_team.id) / games.length),
                avg_pts_conceded: Math.floor(getAvgTeamScore(game.visitor_team.id) / games.length),
            }
        }

        if (teamIds.includes(game.visitor_team.id)) {
            result = {
                id: game.visitor_team.id,
                abbreviation: game.visitor_team.abbreviation,
                city: game.visitor_team.city,
                conference: game.visitor_team.conference,
                division: game.visitor_team.division,
                full_name: game.visitor_team.full_name,
                name: game.visitor_team.name,
                match_results: getGameResults(game.visitor_team.id),
                avg_pts_scored: Math.floor(getAvgTeamScore(game.visitor_team.id) / games.length),
                avg_pts_conceded: Math.floor(getAvgTeamScore(game.home_team.id) / games.length),
            }
        }

        return result;
    }), "id")

    function deleteTeamResult(id: number) {
        teamIds.splice(teamIds.indexOf(id, 0), 1)

        getGames(teamIds)
    }

   return (
       <>
           {
               open && (
                   <Row>
                       {
                           teams.map((team: GameResultType) => {
                               return team && (
                                   <Col span={12} key={team.id} style={{marginBottom: 8}}>
                                       <Card hoverable
                                             style={{ width: 300 }}
                                             cover={
                                                 <img
                                                     alt={`${team.id}`}
                                                     src={`https://interstate21.com/nba-logos/${team.abbreviation}.png`}
                                                 />
                                             }
                                             actions={[
                                                 <Link to={"/results/"+ team.abbreviation} state={[team.id]}>{`See game results >>`}</Link>
                                             ]}
                                             extra={<Button onClick={() => deleteTeamResult(team.id)}>X</Button>}
                                       >
                                           <Card.Meta title={
                                               <>
                                                   <h3>{team.full_name} [{team.abbreviation}]</h3>
                                                   <span>{team.conference} conference</span>
                                               </>
                                           }
                                                      description={
                                                          <>
                                                              <div>Result of past 12 days</div>
                                                              <span>{team.match_results.join()}</span>
                                                              <div>Avg pts scored: {team.avg_pts_scored}</div>
                                                              <div>Avg pts conceded: {team.avg_pts_conceded}</div>
                                                          </>
                                                      }
                                           />
                                       </Card>
                                   </Col>
                               )
                           })
                       }
                   </Row>
               )
           }
       </>
   )
}

export default GamesBoard;