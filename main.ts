input.onButtonPressed(Button.A, function () {
    LCD1IN8.DisString(
    0,
    0,
    "I pressed A",
    LCD1IN8.Get_Color(LCD_COLOR.RED)
    )
    LCD1IN8.LCD_DisplayWindows(
    0,
    0,
    0,
    0
    )
})
input.onButtonPressed(Button.B, function () {
    LCD1IN8.DisString(
    0,
    0,
    "I pressed B",
    LCD1IN8.Get_Color(LCD_COLOR.RED)
    )
    LCD1IN8.LCD_Display()
})
LCD1IN8.LCD_Init()
LCD1IN8.LCD_SetBL(10)
LCD1IN8.LCD_Clear()
