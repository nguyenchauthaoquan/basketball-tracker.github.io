import {Dispatch, FC, useEffect, useState} from "react";
import {connect} from "react-redux";
import {GameActions, TeamActions} from "../common/types/actions";
import {GetGamesAction, GetTeamsAction} from "../stores/actions";
import {TeamSelectProps} from "../common/interfaces/props";
import {Team} from "../common/models/Team";
import {Button, Col, Row, Select} from "antd";
import GamesBoard from "./GamesBoard";

const _ = require("lodash");

const TeamsSelect:FC<TeamSelectProps> = ({teams, games, getTeams, getGames}: TeamSelectProps) => {
    const teamsList  = _.map(teams.teams, (team: Team) => {
        return {
            value: team.id,
            label: team.full_name
        }
    });

    const [teamIds, setTeamIds] = useState<number[]>([]);
    const [openGamesBoard, setOpenGamesBoard] = useState<boolean>(false);

    useEffect(() => {
        getTeams();
    }, [getTeams])

    const onSelectChange = (value : number) => {
        setTeamIds(_.uniq([value, ...teamIds]));
    }

    return (
        <>
            <Row>
                <Col span={12}>
                    <Select
                        options={teamsList}
                        onChange={onSelectChange}
                        style={{ width: 150 }}
                    />
                </Col>
                <Col span={12}>
                    <Button color="primary" onClick={() => {
                        setOpenGamesBoard(true);

                        getGames(teamIds)
                    }
                    }>Track Team</Button>
                </Col>
            </Row>
            <GamesBoard games={games.games} open={openGamesBoard} />
        </>
    )
}

const mapStateToProps = (state: TeamSelectProps) => {
    return {
        teams: state.teams,
        games: state.games,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<TeamActions | GameActions>) => {
    return {
        getTeams: () => {
            dispatch(GetTeamsAction());
        },
        getGames: (ids: object) => {
            dispatch(GetGamesAction(ids))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TeamsSelect)