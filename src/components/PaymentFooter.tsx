import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import { BORDERRADIUS, COLORS, FONTFAMILY, FONTSIZE, SPACING } from '../theme/theme';

interface PriceProps {
  price: string;
  currency: string;
}

interface PaymentFooterProps {
  price: PriceProps;
  buttonPressHandler: any;
  buttonTitle: string;
}

const PaymentFooter: React.FC<PaymentFooterProps> = ({
  price,
  buttonPressHandler,
  buttonTitle,
}) => {
  return (
    <View style={styles.priceFooter}>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price</Text>
        <Text style={styles.priceText}>
          {price.currency} <Text style={styles.price}>{price.price}</Text>
        </Text>
      </View>
      <TouchableOpacity style={styles.payButton} onPress={() => buttonPressHandler()}>
        <Text style={styles.buttonText}>{buttonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PaymentFooter;

const styles = StyleSheet.create({
    priceFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.space_20,
        padding: SPACING.space_20,
    },
    priceContainer: {
        alignItems: 'center',
        width: 100,
    },
    priceTitle: {
        fontFamily: FONTFAMILY.poppins_medium,
        fontSize: FONTSIZE.size_14,
        color: COLORS.secondaryLightGreyHex
    },
    priceText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_24,
        color: COLORS.primaryOrangeHex
    },
    price: {
        color: COLORS.primaryWhiteHex,
    },
    payButton: {
        backgroundColor: COLORS.primaryOrangeHex,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: SPACING.space_36 * 2,
        borderRadius: BORDERRADIUS.radius_20,
    },
    buttonText: {
        fontFamily: FONTFAMILY.poppins_semibold,
        fontSize: FONTSIZE.size_18,
        color: COLORS.primaryWhiteHex
    }
});
