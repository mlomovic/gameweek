import { useSelector } from 'react-redux';

import CurrentGameweekRow from "./CurrentGameweekRow";

function CurrentGameweekList() {
    const currentGameweek = useSelector((state) => state.fixtures);
    let cgDataRenderer = currentGameweek.map((fixture) => {
        let fixtureKey = fixture.team1.shortName + fixture.team2.shortName;
        return <CurrentGameweekRow key={fixtureKey} {...fixture} fixtureKey={fixtureKey} />
    });

    return (
        <div className="current-gameweek-wrapper">
            {cgDataRenderer}
        </div>
    );
}

export default CurrentGameweekList;