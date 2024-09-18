import { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    WaterTypeIcon,
    GrassTypeIcon,
    PoisonTypeIcon,
    DarkTypeIcon,
    DragonTypeIcon,
    ElectricTypeIcon,
    FairyTypeIcon,
    FightingTypeIcon,
    FireTypeIcon,
    FlyingTypeIcon,
    GhostTypeIcon,
    GroundTypeIcon,
    IceTypeIcon,
    NormalTypeIcon,
    PsychicTypeIcon,
    RockTypeIcon,
    SteelTypeIcon,
    BugTypeIcon,
} from '@/assets/icons/types';

import StarIcon from '@/assets/icons/StarIcon';

export default function PokeCard({ id, image, name, types }) {
    const [isFavorite, setIsFavorite] = useState(false);

    const typesIcon = {
        bug: BugTypeIcon,
        dark: DarkTypeIcon,
        dragon: DragonTypeIcon,
        electric: ElectricTypeIcon,
        fairy: FairyTypeIcon,
        fighting: FightingTypeIcon,
        fire: FireTypeIcon,
        flying: FlyingTypeIcon,
        ghost: GhostTypeIcon,
        grass: GrassTypeIcon,
        ground: GroundTypeIcon,
        ice: IceTypeIcon,
        normal: NormalTypeIcon,
        poison: PoisonTypeIcon,
        psychic: PsychicTypeIcon,
        rock: RockTypeIcon,
        steel: SteelTypeIcon,
        water: WaterTypeIcon
    };

    useEffect(() => {
        const loadFavoriteStatus = async () => {
            try {
                const favoriteStatus = await AsyncStorage.getItem(`favorite_${id}`);
                setIsFavorite(favoriteStatus === 'true');
            } catch (error) {
                console.error('Failed to load favorite status', error);
            }
        };
        loadFavoriteStatus();
    }, [id]);

    const toggleFavorite = async () => {
        try {
            const newFavoriteStatus = !isFavorite;
            setIsFavorite(newFavoriteStatus);
            await AsyncStorage.setItem(`favorite_${id}`, newFavoriteStatus.toString());
        } catch (error) {
            console.error('Failed to toggle favorite status', error);
        }
    }

    return (
      <View style={styles.container}>
        <View style={styles.types}>
            {types.map((type) => {
                const Icon = typesIcon[type];
                return Icon ? <Icon key={type} /> : <Text key={type}>{type}</Text>
            })}
        </View>
        <Image
            style={styles.image}
            source={{ uri: image }}
        />
        <View style={styles.info}>
            <Text>{name}</Text>
        </View>
        <View style={styles.favoriteContainer}>
            <TouchableOpacity onPress={toggleFavorite}>
                <StarIcon fill='#6636cf' filled={isFavorite} />
            </TouchableOpacity>
        </View>
      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
    },
    info: {
        width: '100%',
        alignItems: 'center',
        padding: 5,
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: '#F0F0F0',
        elevation: 2
    },
    image: {
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        backgroundColor: '#FAFAFA', 
        height: 116,
        width: 116
    },
    types: {
        zIndex: 10,
        position: 'absolute',
        gap: 5,
        top: 5,
        right: 5
    },
    favoriteContainer: {
        zIndex: 10,
        position: 'absolute',
        gap: 5,
        top: 5,
        left: 5
    }
});