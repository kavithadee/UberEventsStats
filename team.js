var team = [
    {
        role: "Executive Team",
        people: [
            {
                name: "Sukh",
                position: "CEO"
            },
            {
                name: "Asher",
                position: "CMO"
            }
        ]
    },
    {
        role: "Engineering Team",
        people: [
            {
                name: "Alfred",
                position: "CTO"
            },
            {
                name: "Gabriel",
                position: "Engineer"
            }
        ]
    },
    {
        role: "Content Team",
        people: [
            {
                name: "Chris",
                position: ""
            },
            {
                name: "Derry",
                position: ""
            },
            {
                name: "Justin",
                position: ""
            },
        ]
    },
    {
        role: "Interns",
        people: [
            {
                name: "Rohit",
                position: ""
            },
            {
                name: "Emily",
                position: ""
            },
            {
                name: "Jenny",
                position: ""
            },
        ]
    },
    {
        role: "Board of Advisors",
        people: [
            {
                name: "Person 1",
                position: ""
            },
            {
                name: "Person 2",
                position: ""
            },
            {
                name: "Person 3",
                position: ""
            }
        ]
    }  
]

var Role = React.createClass({
    render: function () {
        var role = this.props.data.role
        var people = this.props.data.people;
    
        var images = (
            people.map(function(item){
                return (
                        <div className = "col m4 s12"><img src="https://s3.amazonaws.com/whisperinvest-images/default.png" width='150'/></div>
                )
            })
        );

        var names = (
            people.map(function(item){
                return (
                        <div className = "col m4 s12"><h5 className="name">{item.name}</h5></div>
                )
            })
        );

        var positions = (
            people.map(function(item){
                return (
                        <div className = "col m4 s12"><h5 className="position">{item.position}</h5></div>
                )
            })
        )

        return (
            <div className = "section">
                <div className = "row center-align">
                    <h4 className = "col s12">{role}</h4>
                </div>
                <div className = "row center-align">
                    <div className = "row center-align">
                        {images}
                    </div>
                    <div className = "row center-align">
                        {names}
                    </div>
                    <div className = "row center-align">
                        {positions}
                    </div>
                </div>
            </div>
        )
    }
});

var Team = React.createClass({
    render: function () {
        var team = this.props.data
    
        var content = (
            team.map(function(item){
                return (
                    <span>
                        <Role data={item}></Role>
                        <div className = "divider"></div>
                    </span>
                )
            })
        )

        return (
            <div className = "section">
                {content}
            </div>
        )
    }
});

ReactDOM.render(
    < Team data={team} />,
    document.getElementsByTagName('main')[0]
);
