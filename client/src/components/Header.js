import React from 'react';


class Header extends React.Component{					
	state = {};					
	componentDidMount(){
	let d = new Date();

	let date = d.getDate();
	let month = d.getMonth();
	let day = d.getDay();
	let year = d.getYear();
	let dayString = '';
	let monthString = '';

switch(day){
		case 0:
				dayString = 'SUNDAY';
				break;
		case 1:
				dayString = 'MONDAY';
				break;
		case 2:
				dayString = 'TUESDAY';
				break;
		case 3:
				dayString = 'WEDNESDAY'
				break;
		case 4:
				dayString = 'THURSDAY';
				break;
		case 5:
				dayString = 'FRIDAY';
				break;
		case 6:
				dayString = 'SATURDAY';
				break;
		}

switch(month){
	case 0:
			monthString = 'JANUARY';
			break;
	case 1:
			monthString = 'FEBRUARY';
			break;
	case 2:
			monthString = 'MARCH';
			break;
	case 3:
			monthString = 'APRIL';
			break;
	case 4:
			monthString = 'MAY';
			break;
	case 5:
			monthString = 'JUNE';
			break;
	case 6:
			monthString = 'JULY';
			break;
	case 7:
			monthString = 'AUGUST';
			break;
	case 8:
			monthString = 'SEPTEMBER';
			break;
	case 9:
			monthString = 'OCTOBER';
			break;
	case 10:
			monthString = 'NOVEMBER';
			break;
	case 11:
			monthString = 'DECEMBER';
			break

   }
										
	this.setState({
								date: date,
								month: monthString,
								day: dayString,
								year: year+1900
						});

	}	

render() {
	return (
			<div>
				<h1 className="header">{this.state.day}, {this.state.month} {this.state.date} {this.state.year}</h1>			
			</div>	
	  )
  }
}

export default Header

