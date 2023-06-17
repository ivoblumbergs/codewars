function pointsPer48(ppg, mpg)  {
    if (ppg === 0) {
      return 0;
    }
    
    const extrapolation = (ppg / mpg) * 48;
    return Math.round(extrapolation * 10) / 10;
  }