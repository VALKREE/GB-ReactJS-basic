import React, {useCallback, useEffect, useState} from "react";
import {makeStyles, CircularProgress, Container, Button, List, ListItem} from "@material-ui/core";
import {API_URL_ANIMALS} from "../../constants";
import {useDispatch, useSelector} from "react-redux";
import {selectAnimals, selectAnimalsError, selectAnimalsLoading} from "../../store/animals/selectors";
import {getAnimals} from "../../store/animals/actions";
const useStyles = makeStyles({
    Loader:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    animals:{
        dispay: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    animalItem:{
        display: 'flex',
        flexDirection: 'column',
    },
    animalItem_type: {
        margin: 0,
        fontSize: "2rem",
    },
    animalItem_text:{
        margin: 0,
        fontSize: '1.1rem',
    },
    animalItem_createdAt:{
        margin: 0,
        fontSize: '0.6rem',
    }
});

export const Animals = () => {
    const classes = useStyles();
    const [animals, setAnimals] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const animalsLoaded = useSelector(selectAnimalsLoading);
    const animalsError = useSelector(selectAnimalsError);
    const animalsSuccess = useSelector(selectAnimals)
    const requestAnimals = useCallback( () => {
        dispatch(getAnimals());
    },[])
    useEffect(() => {
        requestAnimals();
    }, []);

    if (animalsLoaded) {
        return <div className={classes.Loader}><CircularProgress /></div>
    }
    if (animalsError){
        return(
            <Container className={classes.animals}>
                <h3>Ошибка запроса</h3>
                <Button onClick={requestAnimals}>Перезагрузка</Button>
            </Container>
        )
    }
    if (!animalsSuccess.length){
        return <h3>Нет информации</h3>
    }

    return (
        <List>
            {animalsSuccess.map((a) =>
                <ListItem key={a.id} className={classes.animalItem} >
                    <h4 className={classes.animalItem_type}>{a.type}</h4>
                    <p className={classes.animalItem_text}>{a.text}</p>
                    <p className={classes.animalItem_createdAt}>{a.createdAt}</p>
                </ListItem>)}
        </List>
    );
}