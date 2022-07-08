import { useSelector } from 'react-redux';

import CurrentGameweekRow from "./CurrentGameweekRow";

function CurrentGameweekList() {
    const currentGameweek = useSelector((state) => state.fixtures);
    let cgDataRenderer;
    if (currentGameweek.status == 'loading') {
        cgDataRenderer = <div className="loading-wrapper"></div>
    } else {
        if (currentGameweek.status == 'failed') {
            cgDataRenderer = <div>{currentGameweek.error}</div>
        }
        else {
            cgDataRenderer = currentGameweek.value.map((fixture) => {
                let fixtureKey = fixture.team1.shortName + fixture.team2.shortName;
                return <CurrentGameweekRow key={fixtureKey} {...fixture} fixtureKey={fixtureKey} />
            });
        }
    }

    return (
        <div className="current-gameweek-wrapper">
            {cgDataRenderer}
        </div>
    );
}

export default CurrentGameweekList;