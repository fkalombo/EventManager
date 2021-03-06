USE [master]
GO
/****** Object:  Database [eventmanagementdb]    Script Date: 2021/05/08 23:15:55 ******/
CREATE DATABASE [eventmanagementdb]
GO
ALTER DATABASE [eventmanagementdb] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [eventmanagementdb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [eventmanagementdb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [eventmanagementdb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [eventmanagementdb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [eventmanagementdb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [eventmanagementdb] SET ARITHABORT OFF 
GO
ALTER DATABASE [eventmanagementdb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [eventmanagementdb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [eventmanagementdb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [eventmanagementdb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [eventmanagementdb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [eventmanagementdb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [eventmanagementdb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [eventmanagementdb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [eventmanagementdb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [eventmanagementdb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [eventmanagementdb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [eventmanagementdb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [eventmanagementdb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [eventmanagementdb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [eventmanagementdb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [eventmanagementdb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [eventmanagementdb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [eventmanagementdb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [eventmanagementdb] SET  MULTI_USER 
GO
ALTER DATABASE [eventmanagementdb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [eventmanagementdb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [eventmanagementdb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [eventmanagementdb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [eventmanagementdb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [eventmanagementdb] SET QUERY_STORE = OFF
GO
USE [eventmanagementdb]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [eventmanagementdb]
GO
/****** Object:  Table [dbo].[tblBanner]    Script Date: 2021/05/08 23:15:55 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblBanner](
	[BannerId] [int] IDENTITY(1,1) NOT NULL,
	[LargeImage] [varchar](max) NOT NULL,
	[MediumImage] [varchar](max) NULL,
	[SmallImage] [varchar](max) NULL,
 CONSTRAINT [PK_tblBanner] PRIMARY KEY CLUSTERED 
(
	[BannerId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblContact]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblContact](
	[ContactId] [int] IDENTITY(1,1) NOT NULL,
	[PhoneNumber] [varchar](15) NOT NULL,
	[AlternateEmail] [varchar](50) NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_tblContact] PRIMARY KEY CLUSTERED 
(
	[ContactId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblEvent]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblEvent](
	[EventId] [int] IDENTITY(1,1) NOT NULL,
	[Description] [varchar](450) NOT NULL,
	[MaxNumGuests] [int] NOT NULL,
	[EventDate] [date] NOT NULL,
	[StartTime] [time](7) NOT NULL,
	[EndTime] [time](7) NOT NULL,
	[EventCreatorId] [int] NOT NULL,
	[BannerId] [int] NOT NULL,
	[EventTitle] [varchar](50) NOT NULL,
	[EventSubTitle] [varchar](50) NULL,
	[VenueId] [int] NULL,
 CONSTRAINT [PK_tblEvent] PRIMARY KEY CLUSTERED 
(
	[EventId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblGender]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblGender](
	[GenderId] [int] IDENTITY(1,1) NOT NULL,
	[Gender] [nchar](15) NOT NULL,
 CONSTRAINT [PK_tblGender] PRIMARY KEY CLUSTERED 
(
	[GenderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblGeneralTicket]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblGeneralTicket](
	[GeneralTicketId] [int] IDENTITY(1,1) NOT NULL,
	[Price] [money] NOT NULL,
	[TicketsLeft] [int] NOT NULL,
 CONSTRAINT [PK_tblGeneralTicket] PRIMARY KEY CLUSTERED 
(
	[GeneralTicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblRole]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblRole](
	[RoleId] [int] IDENTITY(1,1) NOT NULL,
	[RoleName] [varchar](50) NOT NULL,
 CONSTRAINT [PK_tblRole] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblTicket]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblTicket](
	[TicketId] [int] IDENTITY(1,1) NOT NULL,
	[TicketType] [int] NOT NULL,
	[EventId] [int] NOT NULL,
	[UserId] [int] NOT NULL,
 CONSTRAINT [PK_tblTicket] PRIMARY KEY CLUSTERED 
(
	[TicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblUser]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUser](
	[UserId] [int] IDENTITY(1,1) NOT NULL,
	[Name] [varchar](50) NOT NULL,
	[Surname] [varchar](50) NOT NULL,
	[Email] [varchar](50) NOT NULL,
	[EmailConfirmed] [bit] NOT NULL,
	[PasswordHash] [varchar](max) NOT NULL,
	[UserName] [varchar](50) NOT NULL,
	[DateOfBirth] [date] NOT NULL,
	[GenderId] [int] NOT NULL,
 CONSTRAINT [PK_tblUser] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblUserRole]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblUserRole](
	[UserId] [int] NOT NULL,
	[RoleId] [int] NOT NULL,
 CONSTRAINT [PK_tblUserRole_1] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC,
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblVenue]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblVenue](
	[VenueId] [int] IDENTITY(1,1) NOT NULL,
	[Country] [varchar](100) NOT NULL,
	[Province] [varchar](50) NOT NULL,
	[StreetAddress] [varchar](150) NULL,
	[VenueName] [varchar](50) NULL,
	[City] [varchar](150) NOT NULL,
	[ZipCode] [nchar](10) NOT NULL,
 CONSTRAINT [PK_tblLocation] PRIMARY KEY CLUSTERED 
(
	[VenueId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tblVIPTicket]    Script Date: 2021/05/08 23:15:56 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tblVIPTicket](
	[VIPTicketId] [int] IDENTITY(1,1) NOT NULL,
	[Price] [money] NOT NULL,
	[NumTicketsLeft] [int] NOT NULL,
 CONSTRAINT [PK_tblVIPTicket] PRIMARY KEY CLUSTERED 
(
	[VIPTicketId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[tblContact]  WITH CHECK ADD  CONSTRAINT [FK_tblContact_tblUser] FOREIGN KEY([UserId])
REFERENCES [dbo].[tblUser] ([UserId])
GO
ALTER TABLE [dbo].[tblContact] CHECK CONSTRAINT [FK_tblContact_tblUser]
GO
ALTER TABLE [dbo].[tblEvent]  WITH CHECK ADD  CONSTRAINT [FK_tblEvent_tblBanner] FOREIGN KEY([BannerId])
REFERENCES [dbo].[tblBanner] ([BannerId])
GO
ALTER TABLE [dbo].[tblEvent] CHECK CONSTRAINT [FK_tblEvent_tblBanner]
GO
ALTER TABLE [dbo].[tblEvent]  WITH CHECK ADD  CONSTRAINT [FK_tblEvent_tblUser] FOREIGN KEY([EventCreatorId])
REFERENCES [dbo].[tblUser] ([UserId])
GO
ALTER TABLE [dbo].[tblEvent] CHECK CONSTRAINT [FK_tblEvent_tblUser]
GO
ALTER TABLE [dbo].[tblEvent]  WITH CHECK ADD  CONSTRAINT [FK_tblEvent_tblVenue] FOREIGN KEY([VenueId])
REFERENCES [dbo].[tblVenue] ([VenueId])
GO
ALTER TABLE [dbo].[tblEvent] CHECK CONSTRAINT [FK_tblEvent_tblVenue]
GO
ALTER TABLE [dbo].[tblTicket]  WITH CHECK ADD  CONSTRAINT [FK_tblTicket_tblEvent] FOREIGN KEY([EventId])
REFERENCES [dbo].[tblEvent] ([EventId])
GO
ALTER TABLE [dbo].[tblTicket] CHECK CONSTRAINT [FK_tblTicket_tblEvent]
GO
ALTER TABLE [dbo].[tblTicket]  WITH CHECK ADD  CONSTRAINT [FK_tblTicket_tblUser] FOREIGN KEY([UserId])
REFERENCES [dbo].[tblUser] ([UserId])
GO
ALTER TABLE [dbo].[tblTicket] CHECK CONSTRAINT [FK_tblTicket_tblUser]
GO
ALTER TABLE [dbo].[tblUser]  WITH CHECK ADD  CONSTRAINT [FK_tblUser_tblGender] FOREIGN KEY([GenderId])
REFERENCES [dbo].[tblGender] ([GenderId])
GO
ALTER TABLE [dbo].[tblUser] CHECK CONSTRAINT [FK_tblUser_tblGender]
GO
ALTER TABLE [dbo].[tblUserRole]  WITH CHECK ADD  CONSTRAINT [FK_tblUserRole_tblRole] FOREIGN KEY([RoleId])
REFERENCES [dbo].[tblRole] ([RoleId])
GO
ALTER TABLE [dbo].[tblUserRole] CHECK CONSTRAINT [FK_tblUserRole_tblRole]
GO
USE [master]
GO
ALTER DATABASE [eventmanagementdb] SET  READ_WRITE 
GO
