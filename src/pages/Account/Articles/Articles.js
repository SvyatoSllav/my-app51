import { Article } from './Article'
import {
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
  Type
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'
import editIcon from '../../../styles/images/edit.svg'
import deleteIcon from '../../../styles/images/delete.svg'
import classes from './Articles.module.css'

export const Articles = ({ data, interactive = false, onEdit, onDelete }) => {
  return (
    <div className={classes.articles}>
      <SwipeableList
        threshold={0.8}
        type={Type.IOS}
      >
        {data.map(a => {
          const articleElement = (
            <Article key={a.id} article={a} />
          )

          if (interactive) {
            return (
              <SwipeableListItem
                key={a.id}
                trailingActions={
                  <TrailingActions>
                    <SwipeAction onClick={() => onEdit(a)}>
                      <div className={classes.actionContent}>
                        <img src={editIcon} alt="Edit" />
                      </div>
                    </SwipeAction>
                    <SwipeAction destructive onClick={() => onDelete(a)}>
                      <div className={classes.actionContent}>
                        <img src={deleteIcon} alt="Delete" />
                      </div>
                    </SwipeAction>
                  </TrailingActions>
                }
              >
                {articleElement}
              </SwipeableListItem>
            )
          } else {
            return articleElement
          }
        })}
      </SwipeableList>
    </div>
  )
}
