import React, { useContext} from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {education} from './data'
import {educationRU} from './data-ru'
import {LanguageContext}  from '../pages/index'
import './education.scss';


const Education = () => {

	const {state} = useContext(LanguageContext)

	const language = state.language 

	const eduInfo = language === 'english' ? education : educationRU

	return (
		<div  id='education'>
			<div className='paragraph-title-edu'>
				<img src={require('../images/education.jpg')} className='paragraph-title-edu' alt=''/>
			</div>

			<VerticalTimeline className='timeline-container'>
				{eduInfo.map(el => (
				<VerticalTimelineElement key={el.id}
					className='vertical-timeline-element--work'
					contentStyle={styles['card']}
					contentArrowStyle={styles['card-arrow']}
					date={el.date}
					icon={<div  className={el.class} />}
				>
					<h3 className='vertical-timeline-element-title'>{el.name}</h3>
					<h4 className='vertical-timeline-element-subtitle'>{el.address}</h4>
					<p>
						{el.degree}
					</p>
				</VerticalTimelineElement>
				))}
			</VerticalTimeline>
		</div>
	);
};

export default Education

const styles = {
	'card': {
		background: 'rgb(247, 240, 240)',
		fontFamily: 'monospace',
		borderRadius: '18px'
	},
	'card-arrow': {
		borderRight: '1px solid  #rgb(247, 240, 240)'
	},
	'icon': {
		background: 'white'
	}
};

