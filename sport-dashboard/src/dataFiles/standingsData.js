export const standings = [
    { rank: 1, team: "Team A", wins: 9, losses: 1, ties: 0,  pct: .667, div: "-" },
    { rank: 2, team: "Team B", wins: 8, losses: 2, ties: 0, pct: .611, div: "-" },
    { rank: 3, team: "Team C", wins: 7, losses: 3, ties: 0, pct: .383, div: "-" },
    { rank: 4, team: "Team D", wins: 5, losses: 5, ties: 0, pct: .211, div: "-"},
];

// Something like .600 will not show the zeros and mess up the layout.
//Need to make the float show up to .001