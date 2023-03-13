import {Link, useLocation, useParams} from "react-router-dom";
import {GameDetailProps} from "../common/interfaces/props";
import React, {Dispatch, FC, useEffect} from "react";
import {GameActions} from "../common/types/actions";
import {GetGamesAction} from "../stores/actions";
import {connect} from "react-redux";
import GameResultType from "../common/types/GameResultType";
import {Game} from "../common/models/Game";
import {Card, Col, Row, Space} from "antd";

const _ = require("lodash")
const GameDetail: FC<GameDetailProps> = ({games, getGames}: GameDetailProps) => {
    const {teamCode} = useParams();
    const {state} = useLocation();

    const gamesList: Game[] = games.games;

    useEffect(() => {
        getGames(state);
    }, [state, getGames]);

    const getGameResults = () => {
        return gamesList.reduce((previousValue: string[], currentValue: Game) => {
            previousValue.push(`${currentValue.home_team.abbreviation} ${currentValue.home_team_score} - ${currentValue.visitor_team_score} ${currentValue.visitor_team.abbreviation}`)
            return previousValue
        }, [])
    }

    let teams: GameResultType[] = _.uniqBy(gamesList.map((game: Game) => {
        let result;

        if (state.includes(game.home_team.id)) {
            result = {
                id: game.home_team.id,
                abbreviation: game.home_team.abbreviation,
                city: game.home_team.city,
                conference: game.home_team.conference,
                division: game.home_team.division,
                match_results: getGameResults(),
                full_name: game.home_team.full_name,
                name: game.home_team.name,
            }
        }

        if (state.includes(game.visitor_team.id)) {
            result = {
                id: game.visitor_team.id,
                abbreviation: game.visitor_team.abbreviation,
                city: game.visitor_team.city,
                conference: game.visitor_team.conference,
                division: game.visitor_team.division,
                match_results: getGameResults(),
                full_name: game.visitor_team.full_name,
                name: game.visitor_team.name,
            }
        }

        return result;
    }), "id")

    let team = teams.find((item: GameResultType) => item.abbreviation === teamCode);

    return (
        <Row>
            <Col>
                <Space direction="vertical" size={16}>
                    {
                        team && (
                            <Card title={`${team.full_name} [${team.abbreviation}]`}
                                  style={{ width: 300 }}
                                  actions={[
                                      <Link to={"/"} replace={false}>{`<< Back to all team stats`}</Link>
                                  ]}
                            >
                                <p>{team.conference} conference</p>
                                <p>Scores of past 12 days</p>
                                {
                                    team.match_results.map((item: string) =>
                                        <p key={item}>{item}</p>
                                    )
                                }
                            </Card>
                        )
                    }
                </Space>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state: GameDetailProps) => {
    return {
        games: state.games
    }
}

const mapDispatchToProps = (dispatch: Dispatch<GameActions>) => {
    return {
        getGames: (ids: object) => {
            dispatch(GetGamesAction(ids))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GameDetail);