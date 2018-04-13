// import React from 'react';
// import CardViewer from './CardViewer';
// import glamorous from 'glamorous';
// import FontAwesome from 'react-fontawesome';

// class CardsManagement extends React.Component {

//   constructor() {
//     super();
//     this.state = {
//       cardCode: "",
//       cardMode: "",
//       cardNotes: "",
//     };
//     this.renderExistingItems = this.renderExistingItems.bind(this);
//     this.setKeyForCurrentItem = this.setKeyForCurrentItem.bind(this);
//   }

//   setKeyForCurrentItem(item) {
//     this.setState({ 
//       cardCode: item.code,
//       cardMode: item.mode,
//       cardTheme: item.theme,
//       cardTitle: item.title,
//       cardVideo: item.video,
//       cardNotes: item.notes,
//       cardDate: item.timestamp
//     });
//   }

//   renderExistingItems(key) {

//     const item = this.props.cards[key]
//     const ListCard = glamorous.div ({
//       paddingTop: 3, paddingLeft: 10, paddingRight: 10, paddingBottom: 3,
//       margin: 0, marginBottom: 5, backgroundColor: '#f9f9f9',
//       border: '1px solid #f7f7f7', ':hover': { backgroundColor: '#e5e5e5' }})
//     const ListCardCodeMode = glamorous.span ({
//       color: '#999', fontSize: 14, fontWeight: 300, textTransform: 'uppercase',
//       float: 'right', marginLeft: 10 })
//     const ListCardTitle = glamorous.p ({
//       fontWeight: 300, lineHeight: '18px', paddingTop: 10,
//       ':hover': { fontWeight: '400' }})

//     return (
//       <div key={key}>
//         <a onClick={(e) => this.setKeyForCurrentItem(item)}>
//           <ListCard>
//             <ListCardTitle>{item.title} <ListCardCodeMode>{item.mode}</ListCardCodeMode></ListCardTitle>
//             <div className="text-right">
//               <a onClick={() => this.props.editCard(key, item)}><FontAwesome name="cog" /></a> <a onClick={() => this.props.removeCard(key)}><FontAwesome name="window-close" /></a>
//             </div>
//           </ListCard>
//         </a>
//       </div>
//     )
//   }

//   render() {

//     const Aside = glamorous.div ({
//       paddingLeft: 20, paddingBottom: 30,
//       borderLeft: '5px solid #CCC', borderBottom: '2px solid #f9f9f9',
//       marginBottom: 10 })

//     let RenderingCardsByKey = (Object.keys(this.props.cards).length === 0) ? <p>You don't have any card</p> : Object.keys(this.props.cards).map(this.renderExistingItems);

//     return (
//       <div>
//         <div className="row">
//           <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
//             <CardViewer 
//               cardCode={this.state.cardCode} 
//               cardMode={this.state.cardMode} 
//               cardTheme={this.state.cardTheme}
//               cardTitle={this.state.cardTitle}
//               cardVideo={this.state.cardVideo}
//               cardNotes={this.state.cardNotes} 
//               cardDate={this.state.cardDate}
//               cards={this.props.cards}
//             />
//           </div>
//           <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
//             <Aside>
//               <h2>My <strong>Cards</strong></h2>
//               {RenderingCardsByKey}
//             </Aside>
//           </div>
//         </div>
//       </div>
//     )
//   }

// }

// export default CardsManagement;