import { CJS } from './types';

const exampleOutput: CJS = {
  config: [
    {
      path: 'server/sys/castor/_admin/js/ux/BillingCodeDialog.js',
      name: 'BillingCodeDialog',
      fileName: 'BillingCodeDialog.js',
      size: '4.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/BillingCodePanel.js',
      name: 'BillingCodePanel',
      fileName: 'BillingCodePanel.js',
      size: '7.1 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'BillingCodeStore',
            calledAs: 'new ux.BillingCodeStore',
            path: 'ux.BillingCodeStore',
          },
          {
            name: 'BillingCodeDialog',
            calledAs: 'new ux.BillingCodeDialog',
            path: 'ux.BillingCodeDialog',
          },
          {
            name: 'BillingCodeGrid',
            calledAs: 'new ux.BillingCodeGrid',
            path: 'ux.BillingCodeGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/ConfigAdminPanel.js',
      name: 'ConfigAdminPanel',
      fileName: 'ConfigAdminPanel.js',
      size: '7.1 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'AdminConfigStore',
            calledAs: 'new ux.AdminConfigStore',
            path: 'ux.AdminConfigStore',
          },
          {
            name: 'NewAdminConfigDialog',
            calledAs: 'new ux.NewAdminConfigDialog',
            path: 'ux.NewAdminConfigDialog',
          },
          {
            name: 'AdminConfigGrid',
            calledAs: 'new ux.AdminConfigGrid',
            path: 'ux.AdminConfigGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/CrfAccessAdminPanel.js',
      name: 'CrfAccessAdminPanel',
      fileName: 'CrfAccessAdminPanel.js',
      size: '5.9 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CrfAccessGrid',
            calledAs: 'new ux.CrfAccessGrid',
            path: 'ux.CrfAccessGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/CrfAdminPanel.js',
      name: 'CrfAdminPanel',
      fileName: 'CrfAdminPanel.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CRFStore',
            calledAs: 'new ux.CRFStore',
            path: 'ux.CRFStore',
          },
          {
            name: 'CrfAccessStore',
            calledAs: 'new ux.CrfAccessStore',
            path: 'ux.CrfAccessStore',
          },
          {
            name: 'CrfAccessGrid',
            calledAs: 'new ux.CrfAccessGrid',
            path: 'ux.CrfAccessGrid',
          },
          {
            name: 'CRFGrid',
            calledAs: 'new ux.CRFGrid',
            path: 'ux.CRFGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'RowExpander',
            calledAs: 'new Ext.ux.grid.RowExpander',
            path: 'Ext.ux.grid.RowExpander',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/EditProfileFormPanel.js',
      name: 'EditProfileFormPanel',
      fileName: 'EditProfileFormPanel.js',
      size: '7.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FieldSet',
            calledAs: 'new Ext.form.FieldSet',
            path: 'Ext.form.FieldSet',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/NewAdminConfigDialog.js',
      name: 'NewAdminConfigDialog',
      fileName: 'NewAdminConfigDialog.js',
      size: '7.3 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/UserAccessAdminPanel.js',
      name: 'UserAccessAdminPanel',
      fileName: 'UserAccessAdminPanel.js',
      size: '5.5 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'UserAccessGrid',
            calledAs: 'new ux.UserAccessGrid',
            path: 'ux.UserAccessGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_admin/js/ux/UserAdminPanel.js',
      name: 'UserAdminPanel',
      fileName: 'UserAdminPanel.js',
      size: '16 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'UserStore',
            calledAs: 'new ux.UserStore',
            path: 'ux.UserStore',
          },
          {
            name: 'EditProfileFormPanel',
            calledAs: 'new ux.EditProfileFormPanel',
            path: 'ux.EditProfileFormPanel',
          },
          {
            name: 'UserAccessStore',
            calledAs: 'new ux.UserAccessStore',
            path: 'ux.UserAccessStore',
          },
          {
            name: 'UserAccessGrid',
            calledAs: 'new ux.UserAccessGrid',
            path: 'ux.UserAccessGrid',
          },
          {
            name: 'UserGrid',
            calledAs: 'new ux.UserGrid',
            path: 'ux.UserGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'RowExpander',
            calledAs: 'new Ext.ux.grid.RowExpander',
            path: 'Ext.ux.grid.RowExpander',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/Components/Button/Button.js',
      name: 'Button',
      fileName: 'Button.js',
      size: '908 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/Components/Container/ReactContainer.js',
      name: 'ReactContainer',
      fileName: 'ReactContainer.js',
      size: '809 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/Components/Dropdown/Dropdown.js',
      name: 'Dropdown',
      fileName: 'Dropdown.js',
      size: '1.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/Components/Modal/Modal.js',
      name: 'Modal',
      fileName: 'Modal.js',
      size: '1.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/Components/TextArea/TextArea.js',
      name: 'TextArea',
      fileName: 'TextArea.js',
      size: '1.5 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/DataEntryBase.js',
      name: 'DataEntryBase',
      fileName: 'DataEntryBase.js',
      size: '61 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'DataEntryFormContainerCastor',
            calledAs: 'new ux.DataEntryFormContainerCastor',
            path: 'ux.DataEntryFormContainerCastor',
          },
          {
            name: 'MonitoringQueriesGridPanel',
            calledAs: 'new ux.MonitoringQueriesGridPanel',
            path: 'ux.MonitoringQueriesGridPanel',
          },
          {
            name: 'MonitoringValidationsGridPanel',
            calledAs: 'new ux.MonitoringValidationsGridPanel',
            path: 'ux.MonitoringValidationsGridPanel',
          },
          {
            name: 'MonitoringVerificationsGridPanel',
            calledAs: 'new ux.MonitoringVerificationsGridPanel',
            path: 'ux.MonitoringVerificationsGridPanel',
          },
          {
            name: 'SendCcrReportViaEmailDialog',
            calledAs: 'new ux.SendCcrReportViaEmailDialog',
            path: 'ux.SendCcrReportViaEmailDialog',
          },
          {
            name: 'CcrTemplatesReportEmptyFieldsGridPanel',
            calledAs: 'new ux.CcrTemplatesReportEmptyFieldsGridPanel',
            path: 'ux.CcrTemplatesReportEmptyFieldsGridPanel',
          },
        ],
        importedReactComponents: [
          {
            name: 'Button',
            calledAs: 'new Castor.components.Button',
            path: 'Castor.components.Button',
          },
          {
            name: 'ReactContainer',
            calledAs: 'new Castor.components.ReactContainer',
            path: 'Castor.components.ReactContainer',
          },
        ],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'TabPanel',
            calledAs: 'new Ext.TabPanel',
            path: 'Ext.TabPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/DataEntryFormContainerBase.js',
      name: 'DataEntryFormContainerBase',
      fileName: 'DataEntryFormContainerBase.js',
      size: '7.2 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/DataEntryFormContainerCastor.js',
      name: 'DataEntryFormContainerCastor',
      fileName: 'DataEntryFormContainerCastor.js',
      size: '91 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'GridChildField',
            calledAs: 'new ux.GridChildField',
            path: 'ux.GridChildField',
          },
          {
            name: 'ReportFieldGrid',
            calledAs: 'new ux.ReportFieldGrid',
            path: 'ux.ReportFieldGrid',
          },
          {
            name: 'GridField',
            calledAs: 'new ux.GridField',
            path: 'ux.GridField',
          },
          {
            name: 'CastorField',
            calledAs: 'new ux.CastorField',
            path: 'ux.CastorField',
          },
          {
            name: 'EncryptedField',
            calledAs: 'new ux.EncryptedField',
            path: 'ux.EncryptedField',
          },
        ],
        importedReactComponents: [
          {
            name: 'Button',
            calledAs: 'new Castor.components.Button',
            path: 'Castor.components.Button',
          },
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'DelayedTask(',
            calledAs: 'new Ext.util.DelayedTask(',
            path: 'Ext.util.DelayedTask(',
          },
          {
            name: 'DisplayField',
            calledAs: 'new Ext.form.DisplayField',
            path: 'Ext.form.DisplayField',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/DataEntryFormContainerSurvey.js',
      name: 'DataEntryFormContainerSurvey',
      fileName: 'DataEntryFormContainerSurvey.js',
      size: '58 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'GridChildField',
            calledAs: 'new ux.GridChildField',
            path: 'ux.GridChildField',
          },
          {
            name: 'GridField',
            calledAs: 'new ux.GridField',
            path: 'ux.GridField',
          },
          {
            name: 'CastorFieldSurvey',
            calledAs: 'new ux.CastorFieldSurvey',
            path: 'ux.CastorFieldSurvey',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'DisplayField',
            calledAs: 'new Ext.form.DisplayField',
            path: 'Ext.form.DisplayField',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/DataEntryRandomizationPanel.js',
      name: 'DataEntryRandomizationPanel',
      fileName: 'DataEntryRandomizationPanel.js',
      size: '8.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [
          {
            name: 'DataEntryRandomizationFieldsGridPanel',
            calledAs:
              'new Castor.DataEntry.Randomization.DataEntryRandomizationFieldsGridPanel',
            path: 'Castor.DataEntry.Randomization.DataEntryRandomizationFieldsGridPanel',
          },
        ],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'Button',
            calledAs: 'new Ext.Button',
            path: 'Ext.Button',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/Randomization/DataEntryRandomizationFieldsGridPanel.js',
      name: 'DataEntryRandomizationFieldsGridPanel',
      fileName: 'DataEntryRandomizationFieldsGridPanel.js',
      size: '3.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [
          {
            name: 'DataEntryRandomizationFieldsStore',
            calledAs:
              'new Castor.DataEntry.Randomization.DataEntryRandomizationFieldsStore',
            path: 'Castor.DataEntry.Randomization.DataEntryRandomizationFieldsStore',
          },
        ],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/ReportInstancesView.js',
      name: 'ReportInstancesView',
      fileName: 'ReportInstancesView.js',
      size: '47 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ReportTypeStore',
            calledAs: 'new ux.store.ReportTypeStore',
            path: 'ux.store.ReportTypeStore',
          },
          {
            name: 'PhaseStore',
            calledAs: 'new ux.store.PhaseStore',
            path: 'ux.store.PhaseStore',
          },
          {
            name: 'ReportStore',
            calledAs: 'new ux.store.ReportStore',
            path: 'ux.store.ReportStore',
          },
          {
            name: 'AddReportInstanceDialog',
            calledAs: 'new ux.dialogs.AddReportInstanceDialog',
            path: 'ux.dialogs.AddReportInstanceDialog',
          },
          {
            name: 'EditReportInstanceDialog',
            calledAs: 'new ux.dialogs.EditReportInstanceDialog',
            path: 'ux.dialogs.EditReportInstanceDialog',
          },
          {
            name: 'PrintOptionsDialog',
            calledAs: 'new ux.PrintOptionsDialog',
            path: 'ux.PrintOptionsDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'PaginationPageSizePlugin',
            calledAs: 'new Ext.grid.PaginationPageSizePlugin',
            path: 'Ext.grid.PaginationPageSizePlugin',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/reports/ReportsPdfArchiveInstancesContainer.js',
      name: 'ReportsPdfArchiveInstancesContainer',
      fileName: 'ReportsPdfArchiveInstancesContainer.js',
      size: '1.0 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CcrReportsPdfArchiveGridPanel',
            calledAs: 'new ux.CcrReportsPdfArchiveGridPanel',
            path: 'ux.CcrReportsPdfArchiveGridPanel',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/surveys/SurveyInstanceEditForm.js',
      name: 'SurveyInstanceEditForm',
      fileName: 'SurveyInstanceEditForm.js',
      size: '21 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'PhaseStore',
            calledAs: 'new ux.store.PhaseStore',
            path: 'ux.store.PhaseStore',
          },
          {
            name: 'ReportInstanceStore',
            calledAs: 'new ux.store.ReportInstanceStore',
            path: 'ux.store.ReportInstanceStore',
          },
          {
            name: 'MarkDownDialog',
            calledAs: 'new ux.dialogs.MarkDownDialog',
            path: 'ux.dialogs.MarkDownDialog',
          },
          {
            name: 'PreviewHtmlDialog',
            calledAs: 'new ux.dialogs.PreviewHtmlDialog',
            path: 'ux.dialogs.PreviewHtmlDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/surveys/SurveysCombo.js',
      name: 'SurveysCombo',
      fileName: 'SurveysCombo.js',
      size: '1.7 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/DataEntry/surveys/SurveysInstancesContainer.js',
      name: 'SurveysInstancesContainer',
      fileName: 'SurveysInstancesContainer.js',
      size: '4.8 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'SurveyGridPanel',
            calledAs: 'new ux.SurveyGridPanel',
            path: 'ux.SurveyGridPanel',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/Components/SettingsBanner/SettingsBanner.js',
      name: 'SettingsBanner',
      fileName: 'SettingsBanner.js',
      size: '1.2 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/EditFieldPropertiesDialog.js',
      name: 'EditFieldPropertiesDialog',
      fileName: 'EditFieldPropertiesDialog.js',
      size: '131 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'MetadataTypeStore',
            calledAs: 'new ux.store.MetadataTypeStore',
            path: 'ux.store.MetadataTypeStore',
          },
          {
            name: 'EncryptableTypesStore',
            calledAs: 'new ux.store.EncryptableTypesStore',
            path: 'ux.store.EncryptableTypesStore',
          },
          {
            name: 'FieldDependencyPanel',
            calledAs: 'new ux.panel.FieldDependencyPanel',
            path: 'ux.panel.FieldDependencyPanel',
          },
          {
            name: 'ReportFieldStore',
            calledAs: 'new ux.store.ReportFieldStore',
            path: 'ux.store.ReportFieldStore',
          },
          {
            name: 'MarkDownDialog',
            calledAs: 'new ux.dialogs.MarkDownDialog',
            path: 'ux.dialogs.MarkDownDialog',
          },
          {
            name: 'PreviewHtmlDialog',
            calledAs: 'new ux.dialogs.PreviewHtmlDialog',
            path: 'ux.dialogs.PreviewHtmlDialog',
          },
          {
            name: 'GridFieldConfigDialog',
            calledAs: 'new ux.dialog.GridFieldConfigDialog',
            path: 'ux.dialog.GridFieldConfigDialog',
          },
          {
            name: 'show',
            calledAs: 'new ux.LabCodePresetsWindow({}).show',
            path: 'ux.LabCodePresetsWindow({}).show',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'FieldSet',
            calledAs: 'new Ext.form.FieldSet',
            path: 'Ext.form.FieldSet',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'Button',
            calledAs: 'new Ext.Button',
            path: 'Ext.Button',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
          {
            name: 'CompositeField',
            calledAs: 'new Ext.form.CompositeField',
            path: 'Ext.form.CompositeField',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormBuilderBaseEditor.js',
      name: 'FormBuilderBaseEditor',
      fileName: 'FormBuilderBaseEditor.js',
      size: '42 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'DataView',
            calledAs: 'new Ext.DataView',
            path: 'Ext.DataView',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormBuilderReportEditor.js',
      name: 'FormBuilderReportEditor',
      fileName: 'FormBuilderReportEditor.js',
      size: '966 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormBuilderStudyEditor.js',
      name: 'FormBuilderStudyEditor',
      fileName: 'FormBuilderStudyEditor.js',
      size: '969 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormBuilderSurveyEditor.js',
      name: 'FormBuilderSurveyEditor',
      fileName: 'FormBuilderSurveyEditor.js',
      size: '973 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormBuilderTabs.js',
      name: 'FormBuilderTabs',
      fileName: 'FormBuilderTabs.js',
      size: '2.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormStructureOptionGroupEditor.js',
      name: 'FormStructureOptionGroupEditor',
      fileName: 'FormStructureOptionGroupEditor.js',
      size: '9.6 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'OptionGroupImportDialog',
            calledAs: 'new ux.dialogs.OptionGroupImportDialog',
            path: 'ux.dialogs.OptionGroupImportDialog',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormStructureReportEditor.js',
      name: 'FormStructureReportEditor',
      fileName: 'FormStructureReportEditor.js',
      size: '33 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'PrintPhaseOptionsDialog',
            calledAs: 'new ux.PrintPhaseOptionsDialog',
            path: 'ux.PrintPhaseOptionsDialog',
          },
          {
            name: 'AddNewReportDialog',
            calledAs: 'new ux.dialogs.AddNewReportDialog',
            path: 'ux.dialogs.AddNewReportDialog',
          },
          {
            name: 'ReportStepDialog',
            calledAs: 'new ux.dialog.ReportStepDialog',
            path: 'ux.dialog.ReportStepDialog',
          },
          {
            name: 'AssignRoleToFormEntityDialog',
            calledAs: 'new ux.dialog.AssignRoleToFormEntityDialog',
            path: 'ux.dialog.AssignRoleToFormEntityDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormStructureStudyEditor.js',
      name: 'FormStructureStudyEditor',
      fileName: 'FormStructureStudyEditor.js',
      size: '35 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'PrintPhaseOptionsDialog',
            calledAs: 'new ux.PrintPhaseOptionsDialog',
            path: 'ux.PrintPhaseOptionsDialog',
          },
          {
            name: 'AssignRoleToFormEntityDialog',
            calledAs: 'new ux.dialog.AssignRoleToFormEntityDialog',
            path: 'ux.dialog.AssignRoleToFormEntityDialog',
          },
          {
            name: 'StepDialog',
            calledAs: 'new ux.dialog.StepDialog',
            path: 'ux.dialog.StepDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormStructureSurveyEditor.js',
      name: 'FormStructureSurveyEditor',
      fileName: 'FormStructureSurveyEditor.js',
      size: '29 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'PrintPhaseOptionsDialog',
            calledAs: 'new ux.PrintPhaseOptionsDialog',
            path: 'ux.PrintPhaseOptionsDialog',
          },
          {
            name: 'SurveyDialog',
            calledAs: 'new ux.dialog.SurveyDialog',
            path: 'ux.dialog.SurveyDialog',
          },
          {
            name: 'SurveyStepDialog',
            calledAs: 'new ux.dialog.SurveyStepDialog',
            path: 'ux.dialog.SurveyStepDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormStructureSurveyPackageEditor.js',
      name: 'FormStructureSurveyPackageEditor',
      fileName: 'FormStructureSurveyPackageEditor.js',
      size: '19 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'SurveyScheduleManagement',
            calledAs: 'new ux.dialog.SurveyScheduleManagement',
            path: 'ux.dialog.SurveyScheduleManagement',
          },
          {
            name: 'PrintPhaseOptionsDialog',
            calledAs: 'new ux.PrintPhaseOptionsDialog',
            path: 'ux.PrintPhaseOptionsDialog',
          },
          {
            name: 'SurveyPackageDialog',
            calledAs: 'new ux.dialog.SurveyPackageDialog',
            path: 'ux.dialog.SurveyPackageDialog',
          },
          {
            name: 'CopySurveyPackageDialog',
            calledAs: 'new ux.dialog.CopySurveyPackageDialog',
            path: 'ux.dialog.CopySurveyPackageDialog',
          },
          {
            name: 'OpenSurveyLinkDialog',
            calledAs: 'new ux.dialog.OpenSurveyLinkDialog',
            path: 'ux.dialog.OpenSurveyLinkDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/FormStructureTabs.js',
      name: 'FormStructureTabs',
      fileName: 'FormStructureTabs.js',
      size: '2.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF.js',
      name: 'ManageCRF',
      fileName: 'ManageCRF.js',
      size: '15 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ExportStructureDialog',
            calledAs: 'new ux.dialogs.ExportStructureDialog',
            path: 'ux.dialogs.ExportStructureDialog',
          },
          {
            name: 'ImportStructureDialog',
            calledAs: 'new ux.dialogs.ImportStructureDialog',
            path: 'ux.dialogs.ImportStructureDialog',
          },
          {
            name: 'PhaseStore',
            calledAs: 'new ux.store.PhaseStore',
            path: 'ux.store.PhaseStore',
          },
          {
            name: 'ReportStore',
            calledAs: 'new ux.store.ReportStore',
            path: 'ux.store.ReportStore',
          },
          {
            name: 'SurveyStore',
            calledAs: 'new ux.store.SurveyStore',
            path: 'ux.store.SurveyStore',
          },
          {
            name: 'SurveyPackageStore',
            calledAs: 'new ux.store.SurveyPackageStore',
            path: 'ux.store.SurveyPackageStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: '',
            calledAs: 'new Ext.data.Store()..',
            path: 'Ext.data.Store()..',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_AuditTrail.js',
      name: 'ManageCRF_AuditTrail',
      fileName: 'ManageCRF_AuditTrail.js',
      size: '1002 bytes',
      childComponents: {
        importedExtComponents: [
          {
            name: 'AuditTrailEntryGrid',
            calledAs: 'new ux.AuditTrailEntryGrid',
            path: 'ux.AuditTrailEntryGrid',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_CcrTemplate.js',
      name: 'ManageCRF_CcrTemplate',
      fileName: 'ManageCRF_CcrTemplate.js',
      size: '3.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_CcrTemplate_Edit.js',
      name: 'ManageCRF_CcrTemplate_Edit',
      fileName: 'ManageCRF_CcrTemplate_Edit.js',
      size: '14 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'AssignCcrTemplateVariableDialog',
            calledAs: 'new ux.AssignCcrTemplateVariableDialog',
            path: 'ux.AssignCcrTemplateVariableDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_CcrTemplates.js',
      name: 'ManageCRF_CcrTemplates',
      fileName: 'ManageCRF_CcrTemplates.js',
      size: '2.7 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CcrTemplatesGridPanel',
            calledAs: 'new ux.CcrTemplatesGridPanel',
            path: 'ux.CcrTemplatesGridPanel',
          },
          {
            name: 'AddCcrTemplateDialog',
            calledAs: 'new ux.AddCcrTemplateDialog',
            path: 'ux.AddCcrTemplateDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Form.js',
      name: 'ManageCRF_Form',
      fileName: 'ManageCRF_Form.js',
      size: '62 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'PrintOptionsDialog',
            calledAs: 'new ux.PrintOptionsDialog',
            path: 'ux.PrintOptionsDialog',
          },
          {
            name: 'EditFieldPropertiesDialog',
            calledAs: 'new ux.EditFieldPropertiesDialog',
            path: 'ux.EditFieldPropertiesDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Form_Structure.js',
      name: 'ManageCRF_Form_Structure',
      fileName: 'ManageCRF_Form_Structure.js',
      size: '7.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Records.js',
      name: 'ManageCRF_Records',
      fileName: 'ManageCRF_Records.js',
      size: '3.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Reports.js',
      name: 'ManageCRF_Reports',
      fileName: 'ManageCRF_Reports.js',
      size: '1.1 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ReportInstanceGridPanel',
            calledAs: 'new ux.ReportInstanceGridPanel',
            path: 'ux.ReportInstanceGridPanel',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings.js',
      name: 'ManageCRF_Settings',
      fileName: 'ManageCRF_Settings.js',
      size: '131 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'RecordTypeStore',
            calledAs: 'new ux.store.RecordTypeStore',
            path: 'ux.store.RecordTypeStore',
          },
          {
            name: 'SettingsBanner',
            calledAs: 'new ux.banner.SettingsBanner',
            path: 'ux.banner.SettingsBanner',
          },
          {
            name: 'EditCustomRecordIdPatternDialog',
            calledAs: 'new ux.dialogs.EditCustomRecordIdPatternDialog',
            path: 'ux.dialogs.EditCustomRecordIdPatternDialog',
          },
          {
            name: 'show',
            calledAs:
              'new ux.dialogs.IPTwoFactorAuthenticationAllowListDialog().show',
            path: 'ux.dialogs.IPTwoFactorAuthenticationAllowListDialog().show',
          },
          {
            name: 'SignatureStatementDialog',
            calledAs: 'new ux.dialogs.SignatureStatementDialog',
            path: 'ux.dialogs.SignatureStatementDialog',
          },
          {
            name: 'RecordsOverviewCustomColumnsDialog',
            calledAs: 'new ux.dialogs.RecordsOverviewCustomColumnsDialog',
            path: 'ux.dialogs.RecordsOverviewCustomColumnsDialog',
          },
          {
            name: 'ManageInstitutesDialog',
            calledAs: 'new ux.dialogs.ManageInstitutesDialog',
            path: 'ux.dialogs.ManageInstitutesDialog',
          },
          {
            name: 'ManageVerificationTypesDialog',
            calledAs: 'new ux.dialogs.ManageVerificationTypesDialog',
            path: 'ux.dialogs.ManageVerificationTypesDialog',
          },
          {
            name: 'AddInstituteDialog',
            calledAs: 'new ux.dialogs.AddInstituteDialog',
            path: 'ux.dialogs.AddInstituteDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings_Admin.js',
      name: 'ManageCRF_Settings_Admin',
      fileName: 'ManageCRF_Settings_Admin.js',
      size: '1.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings_AutomationLog.js',
      name: 'ManageCRF_Settings_AutomationLog',
      fileName: 'ManageCRF_Settings_AutomationLog.js',
      size: '18 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'RuleBuilderLogStore({ crf: me',
            calledAs: 'new ux.store.RuleBuilderLogStore({ crf: me',
            path: 'ux.store.RuleBuilderLogStore({ crf: me',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'VrTabPanel',
            calledAs: 'new Ext.ux.VrTabPanel',
            path: 'Ext.ux.VrTabPanel',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'RowExpander',
            calledAs: 'new Ext.ux.grid.RowExpander',
            path: 'Ext.ux.grid.RowExpander',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'GridView',
            calledAs: 'new Ext.grid.GridView',
            path: 'Ext.grid.GridView',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings_Automations.js',
      name: 'ManageCRF_Settings_Automations',
      fileName: 'ManageCRF_Settings_Automations.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'AutomationsStore({ crf: me',
            calledAs: 'new ux.store.AutomationsStore({ crf: me',
            path: 'ux.store.AutomationsStore({ crf: me',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings_Metadata.js',
      name: 'ManageCRF_Settings_Metadata',
      fileName: 'ManageCRF_Settings_Metadata.js',
      size: '8.1 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'MetadataTypeStore',
            calledAs: 'new ux.store.MetadataTypeStore',
            path: 'ux.store.MetadataTypeStore',
          },
          {
            name: 'MetadataStore',
            calledAs: 'new ux.store.MetadataStore',
            path: 'ux.store.MetadataStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings_Notifications.js',
      name: 'ManageCRF_Settings_Notifications',
      fileName: 'ManageCRF_Settings_Notifications.js',
      size: '9.0 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'NotificationConfigurationsStore',
            calledAs: 'new ux.store.NotificationConfigurationsStore',
            path: 'ux.store.NotificationConfigurationsStore',
          },
          {
            name: 'AddNotificationConfigurationDialog',
            calledAs: 'new ux.dialogs.AddNotificationConfigurationDialog',
            path: 'ux.dialogs.AddNotificationConfigurationDialog',
          },
          {
            name: 'EditNotificationConfigurationDialog',
            calledAs: 'new ux.dialogs.EditNotificationConfigurationDialog',
            path: 'ux.dialogs.EditNotificationConfigurationDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FieldSet',
            calledAs: 'new Ext.form.FieldSet',
            path: 'Ext.form.FieldSet',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Settings_Randomization.js',
      name: 'ManageCRF_Settings_Randomization',
      fileName: 'ManageCRF_Settings_Randomization.js',
      size: '75 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'PhaseStore',
            calledAs: 'new ux.store.PhaseStore',
            path: 'ux.store.PhaseStore',
          },
          {
            name: 'StepStore',
            calledAs: 'new ux.store.StepStore',
            path: 'ux.store.StepStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'SpinnerField',
            calledAs: 'new Ext.ux.form.SpinnerField',
            path: 'Ext.ux.form.SpinnerField',
          },
          {
            name: 'Button',
            calledAs: 'new Ext.Button',
            path: 'Ext.Button',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'EditorGridPanel',
            calledAs: 'new Ext.grid.EditorGridPanel',
            path: 'Ext.grid.EditorGridPanel',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Statistics.js',
      name: 'ManageCRF_Statistics',
      fileName: 'ManageCRF_Statistics.js',
      size: '15 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonStore',
            calledAs: 'new Ext.data.JsonStore',
            path: 'Ext.data.JsonStore',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'FieldSet',
            calledAs: 'new Ext.form.FieldSet',
            path: 'Ext.form.FieldSet',
          },
          {
            name: 'Button',
            calledAs: 'new Ext.Button',
            path: 'Ext.Button',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Surveys.js',
      name: 'ManageCRF_Surveys',
      fileName: 'ManageCRF_Surveys.js',
      size: '3.4 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'SurveyGridPanel',
            calledAs: 'new ux.SurveyGridPanel',
            path: 'ux.SurveyGridPanel',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ManageCRF/ManageCRF_Users.js',
      name: 'ManageCRF_Users',
      fileName: 'ManageCRF_Users.js',
      size: '26 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'UserRightsDialog',
            calledAs: 'new ux.dialog.UserRightsDialog',
            path: 'ux.dialog.UserRightsDialog',
          },
          {
            name: 'Roles({ crf: me',
            calledAs: 'new ux.grid.Roles({ crf: me',
            path: 'ux.grid.Roles({ crf: me',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'CheckboxSelectionModel',
            calledAs: 'new Ext.grid.CheckboxSelectionModel',
            path: 'Ext.grid.CheckboxSelectionModel',
          },
          {
            name: 'EditorGridPanel',
            calledAs: 'new Ext.grid.EditorGridPanel',
            path: 'Ext.grid.EditorGridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'JsonStore',
            calledAs: 'new Ext.data.JsonStore',
            path: 'Ext.data.JsonStore',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/AuditTrailEntryGrid.js',
      name: 'AuditTrailEntryGrid',
      fileName: 'AuditTrailEntryGrid.js',
      size: '18 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'AuditTrailEntryStore',
            calledAs: 'new ux.store.AuditTrailEntryStore',
            path: 'ux.store.AuditTrailEntryStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'RowExpander',
            calledAs: 'new Ext.ux.grid.RowExpander',
            path: 'Ext.ux.grid.RowExpander',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'RowSelectionModel',
            calledAs: 'new Ext.grid.RowSelectionModel',
            path: 'Ext.grid.RowSelectionModel',
          },
          {
            name: 'GridView',
            calledAs: 'new Ext.grid.GridView',
            path: 'Ext.grid.GridView',
          },
          {
            name: 'Template',
            calledAs: 'new Ext.Template',
            path: 'Ext.Template',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/CcrReportsPdfArchiveGridPanel.js',
      name: 'CcrReportsPdfArchiveGridPanel',
      fileName: 'CcrReportsPdfArchiveGridPanel.js',
      size: '6.5 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorCcrReportsPdfArchiveStore',
            calledAs: 'new ux.store.CastorCcrReportsPdfArchiveStore',
            path: 'ux.store.CastorCcrReportsPdfArchiveStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/CcrTemplatesGridPanel.js',
      name: 'CcrTemplatesGridPanel',
      fileName: 'CcrTemplatesGridPanel.js',
      size: '5.5 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorCcrTemplatesStore',
            calledAs: 'new ux.store.CastorCcrTemplatesStore',
            path: 'ux.store.CastorCcrTemplatesStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/CcrTemplatesReportEmptyFieldsGridPanel.js',
      name: 'CcrTemplatesReportEmptyFieldsGridPanel',
      fileName: 'CcrTemplatesReportEmptyFieldsGridPanel.js',
      size: '3.8 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorCcrTemplatesReportEmptyFieldsStore',
            calledAs: 'new ux.store.CastorCcrTemplatesReportEmptyFieldsStore',
            path: 'ux.store.CastorCcrTemplatesReportEmptyFieldsStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/MonitoringQueriesGridPanel.js',
      name: 'MonitoringQueriesGridPanel',
      fileName: 'MonitoringQueriesGridPanel.js',
      size: '22 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorMonitoringQueryStore',
            calledAs: 'new ux.store.CastorMonitoringQueryStore',
            path: 'ux.store.CastorMonitoringQueryStore',
          },
          {
            name: 'InstituteStore',
            calledAs: 'new ux.store.InstituteStore',
            path: 'ux.store.InstituteStore',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'PaginationPageSizePlugin',
            calledAs: 'new Ext.grid.PaginationPageSizePlugin',
            path: 'Ext.grid.PaginationPageSizePlugin',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'LovCombo',
            calledAs: 'new Ext.ux.form.LovCombo',
            path: 'Ext.ux.form.LovCombo',
          },
          {
            name: 'ButtonGroup',
            calledAs: 'new Ext.ButtonGroup',
            path: 'Ext.ButtonGroup',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/MonitoringValidationsGridPanel.js',
      name: 'MonitoringValidationsGridPanel',
      fileName: 'MonitoringValidationsGridPanel.js',
      size: '14 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorMonitoringValidationStore',
            calledAs: 'new ux.store.CastorMonitoringValidationStore',
            path: 'ux.store.CastorMonitoringValidationStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'PaginationPageSizePlugin',
            calledAs: 'new Ext.grid.PaginationPageSizePlugin',
            path: 'Ext.grid.PaginationPageSizePlugin',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/MonitoringVerificationsGridPanel.js',
      name: 'MonitoringVerificationsGridPanel',
      fileName: 'MonitoringVerificationsGridPanel.js',
      size: '13 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorMonitoringVerificationsStore',
            calledAs: 'new ux.store.CastorMonitoringVerificationsStore',
            path: 'ux.store.CastorMonitoringVerificationsStore',
          },
          {
            name: 'CastorMonitoringVerificationsUniqueUsersStore',
            calledAs:
              'new ux.store.CastorMonitoringVerificationsUniqueUsersStore',
            path: 'ux.store.CastorMonitoringVerificationsUniqueUsersStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'PaginationPageSizePlugin',
            calledAs: 'new Ext.grid.PaginationPageSizePlugin',
            path: 'Ext.grid.PaginationPageSizePlugin',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'LovCombo',
            calledAs: 'new Ext.ux.form.LovCombo',
            path: 'Ext.ux.form.LovCombo',
          },
          {
            name: 'ButtonGroup',
            calledAs: 'new Ext.ButtonGroup',
            path: 'Ext.ButtonGroup',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/PhasesStepsNavigator.js',
      name: 'PhasesStepsNavigator',
      fileName: 'PhasesStepsNavigator.js',
      size: '77 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'StepSourceDataVerificationConfirmationDialog',
            calledAs:
              'new ux.dialogs.StepSourceDataVerificationConfirmationDialog',
            path: 'ux.dialogs.StepSourceDataVerificationConfirmationDialog',
          },
          {
            name: 'PrintOptionsDialog',
            calledAs: 'new ux.PrintOptionsDialog',
            path: 'ux.PrintOptionsDialog',
          },
          {
            name: 'ConfirmChangesDialog',
            calledAs: 'new ux.ConfirmChangesDialog',
            path: 'ux.ConfirmChangesDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/ReportInstanceGridPanel.js',
      name: 'ReportInstanceGridPanel',
      fileName: 'ReportInstanceGridPanel.js',
      size: '46 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ReportStore',
            calledAs: 'new ux.store.ReportStore',
            path: 'ux.store.ReportStore',
          },
          {
            name: 'ReportTypeStore',
            calledAs: 'new ux.store.ReportTypeStore',
            path: 'ux.store.ReportTypeStore',
          },
          {
            name: 'PhaseStore',
            calledAs: 'new ux.store.PhaseStore',
            path: 'ux.store.PhaseStore',
          },
          {
            name: 'PrintOptionsDialog',
            calledAs: 'new ux.PrintOptionsDialog',
            path: 'ux.PrintOptionsDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/ReportStepsNavigator.js',
      name: 'ReportStepsNavigator',
      fileName: 'ReportStepsNavigator.js',
      size: '48 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'StepSourceDataVerificationConfirmationDialog',
            calledAs:
              'new ux.dialogs.StepSourceDataVerificationConfirmationDialog',
            path: 'ux.dialogs.StepSourceDataVerificationConfirmationDialog',
          },
          {
            name: 'AddReportInstanceDialog',
            calledAs: 'new ux.dialogs.AddReportInstanceDialog',
            path: 'ux.dialogs.AddReportInstanceDialog',
          },
          {
            name: 'PrintOptionsDialog',
            calledAs: 'new ux.PrintOptionsDialog',
            path: 'ux.PrintOptionsDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/SurveyGridPanel.js',
      name: 'SurveyGridPanel',
      fileName: 'SurveyGridPanel.js',
      size: '82 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorSurveyPackageInstanceStore',
            calledAs: 'new ux.store.CastorSurveyPackageInstanceStore',
            path: 'ux.store.CastorSurveyPackageInstanceStore',
          },
          {
            name: 'PhaseStore',
            calledAs: 'new ux.store.PhaseStore',
            path: 'ux.store.PhaseStore',
          },
          {
            name: 'PrintOptionsDialog',
            calledAs: 'new ux.PrintOptionsDialog',
            path: 'ux.PrintOptionsDialog',
          },
          {
            name: 'ResendSurveyInvitesOptionsDialog',
            calledAs: 'new ux.dialog.ResendSurveyInvitesOptionsDialog',
            path: 'ux.dialog.ResendSurveyInvitesOptionsDialog',
          },
          {
            name: 'SendSurveyInstanceDialog',
            calledAs: 'new ux.dialog.SendSurveyInstanceDialog',
            path: 'ux.dialog.SendSurveyInstanceDialog',
          },
          {
            name: 'PasswordConfirmDialog',
            calledAs: 'new ux.dialogs.PasswordConfirmDialog',
            path: 'ux.dialogs.PasswordConfirmDialog',
          },
        ],
        importedReactComponents: [
          {
            name: 'SurveyInstanceEditForm',
            calledAs: 'new Castor.DataEntry.surveys.SurveyInstanceEditForm',
            path: 'Castor.DataEntry.surveys.SurveyInstanceEditForm',
          },
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          {
            name: 'CheckboxSelectionModel',
            calledAs: 'new Ext.grid.CheckboxSelectionModel',
            path: 'Ext.grid.CheckboxSelectionModel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'PaginationPageSizePlugin',
            calledAs: 'new Ext.grid.PaginationPageSizePlugin',
            path: 'Ext.grid.PaginationPageSizePlugin',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AddCcrTemplateDialog.js',
      name: 'AddCcrTemplateDialog',
      fileName: 'AddCcrTemplateDialog.js',
      size: '3.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AddInstituteDialog.js',
      name: 'AddInstituteDialog',
      fileName: 'AddInstituteDialog.js',
      size: '9.7 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AddNewReportDialog.js',
      name: 'AddNewReportDialog',
      fileName: 'AddNewReportDialog.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ReportTypeStore',
            calledAs: 'new ux.store.ReportTypeStore',
            path: 'ux.store.ReportTypeStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AddNotificationConfigurationDialog.js',
      name: 'AddNotificationConfigurationDialog',
      fileName: 'AddNotificationConfigurationDialog.js',
      size: '38 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ContactsStore',
            calledAs: 'new ux.store.ContactsStore',
            path: 'ux.store.ContactsStore',
          },
          {
            name: 'StepStore',
            calledAs: 'new ux.store.StepStore',
            path: 'ux.store.StepStore',
          },
          {
            name: 'ReportStepStore',
            calledAs: 'new ux.store.ReportStepStore',
            path: 'ux.store.ReportStepStore',
          },
          {
            name: 'InstituteStore',
            calledAs: 'new ux.store.InstituteStore',
            path: 'ux.store.InstituteStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AddReportInstanceDialog.js',
      name: 'AddReportInstanceDialog',
      fileName: 'AddReportInstanceDialog.js',
      size: '13 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ReportParentStore',
            calledAs: 'new ux.store.ReportParentStore',
            path: 'ux.store.ReportParentStore',
          },
          {
            name: 'ReportStore',
            calledAs: 'new ux.store.ReportStore',
            path: 'ux.store.ReportStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'GroupingStore',
            calledAs: 'new Ext.data.GroupingStore',
            path: 'Ext.data.GroupingStore',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AddRoleDialog.js',
      name: 'AddRoleDialog',
      fileName: 'AddRoleDialog.js',
      size: '3.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AssignCcrTemplateVariableDialog.js',
      name: 'AssignCcrTemplateVariableDialog',
      fileName: 'AssignCcrTemplateVariableDialog.js',
      size: '9.8 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'CastorCcrTemplatesSearchTemplateVariablesStore',
            calledAs:
              'new ux.store.CastorCcrTemplatesSearchTemplateVariablesStore',
            path: 'ux.store.CastorCcrTemplatesSearchTemplateVariablesStore',
          },
          {
            name: 'CastorCcrTemplatesSearchFieldVariablesStore',
            calledAs:
              'new ux.store.CastorCcrTemplatesSearchFieldVariablesStore',
            path: 'ux.store.CastorCcrTemplatesSearchFieldVariablesStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/AuditTrailDialog.js',
      name: 'AuditTrailDialog',
      fileName: 'AuditTrailDialog.js',
      size: '3.3 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonStore',
            calledAs: 'new Ext.data.JsonStore',
            path: 'Ext.data.JsonStore',
          },
          {
            name: 'DataView',
            calledAs: 'new Ext.DataView',
            path: 'Ext.DataView',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/CommentsDialog.js',
      name: 'CommentsDialog',
      fileName: 'CommentsDialog.js',
      size: '5.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/CopySurveyPackageDialog.js',
      name: 'CopySurveyPackageDialog',
      fileName: 'CopySurveyPackageDialog.js',
      size: '2.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/CreateHelpdeskTicketDialog.js',
      name: 'CreateHelpdeskTicketDialog',
      fileName: 'CreateHelpdeskTicketDialog.js',
      size: '7.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/EditCustomRecordIdPatternDialog.js',
      name: 'EditCustomRecordIdPatternDialog',
      fileName: 'EditCustomRecordIdPatternDialog.js',
      size: '15 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'RecordIdElementStore',
            calledAs: 'new ux.store.RecordIdElementStore',
            path: 'ux.store.RecordIdElementStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/EditInstituteDialog.js',
      name: 'EditInstituteDialog',
      fileName: 'EditInstituteDialog.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/EditMetadataType.js',
      name: 'EditMetadataType',
      fileName: 'EditMetadataType.js',
      size: '3.1 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/EditNotificationConfigurationDialog.js',
      name: 'EditNotificationConfigurationDialog',
      fileName: 'EditNotificationConfigurationDialog.js',
      size: '2.7 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/EditReportInstanceDialog.js',
      name: 'EditReportInstanceDialog',
      fileName: 'EditReportInstanceDialog.js',
      size: '7.1 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ReportParentStore',
            calledAs: 'new ux.store.ReportParentStore',
            path: 'ux.store.ReportParentStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/ExportStructureDialog.js',
      name: 'ExportStructureDialog',
      fileName: 'ExportStructureDialog.js',
      size: '22 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'TreePanel',
            calledAs: 'new Ext.tree.TreePanel',
            path: 'Ext.tree.TreePanel',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
          {
            name: 'getBody',
            calledAs: 'new Ext.LoadMask(Ext.getBody',
            path: 'Ext.LoadMask(Ext.getBody',
          },
          {
            name: 'TreeNode',
            calledAs: 'new Ext.tree.TreeNode',
            path: 'Ext.tree.TreeNode',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/GoogleAuthenticatorConfig.js',
      name: 'GoogleAuthenticatorConfig',
      fileName: 'GoogleAuthenticatorConfig.js',
      size: '7.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'DisplayField',
            calledAs: 'new Ext.form.DisplayField',
            path: 'Ext.form.DisplayField',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
          {
            name: 'Hidden',
            calledAs: 'new Ext.form.Hidden',
            path: 'Ext.form.Hidden',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/GridFieldConfigDialog.js',
      name: 'GridFieldConfigDialog',
      fileName: 'GridFieldConfigDialog.js',
      size: '34 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'GridFieldPreview',
            calledAs: 'new ux.GridFieldPreview',
            path: 'ux.GridFieldPreview',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/ImportStructureDialog.js',
      name: 'ImportStructureDialog',
      fileName: 'ImportStructureDialog.js',
      size: '31 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'DisplayField',
            calledAs: 'new Ext.form.DisplayField',
            path: 'Ext.form.DisplayField',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/LabCodePresetsWindow.js',
      name: 'LabCodePresetsWindow',
      fileName: 'LabCodePresetsWindow.js',
      size: '2.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/ManageInstitutesDialog.js',
      name: 'ManageInstitutesDialog',
      fileName: 'ManageInstitutesDialog.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'InstituteStore',
            calledAs: 'new ux.store.InstituteStore',
            path: 'ux.store.InstituteStore',
          },
          {
            name: 'EditInstituteDialog',
            calledAs: 'new ux.dialog.EditInstituteDialog',
            path: 'ux.dialog.EditInstituteDialog',
          },
          {
            name: 'AddInstituteDialog',
            calledAs: 'new ux.dialogs.AddInstituteDialog',
            path: 'ux.dialogs.AddInstituteDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/ManageVerificationTypesDialog.js',
      name: 'ManageVerificationTypesDialog',
      fileName: 'ManageVerificationTypesDialog.js',
      size: '11 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'VerificationTypeStore',
            calledAs: 'new ux.store.VerificationTypeStore',
            path: 'ux.store.VerificationTypeStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/MarkDownDialog.js',
      name: 'MarkDownDialog',
      fileName: 'MarkDownDialog.js',
      size: '6.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/OpenSurveyLinkDialog.js',
      name: 'OpenSurveyLinkDialog',
      fileName: 'OpenSurveyLinkDialog.js',
      size: '3.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/OptionGroupDialog.js',
      name: 'OptionGroupDialog',
      fileName: 'OptionGroupDialog.js',
      size: '20 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'CompositeField',
            calledAs: 'new Ext.form.CompositeField',
            path: 'Ext.form.CompositeField',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/OptionGroupImportDialog.js',
      name: 'OptionGroupImportDialog',
      fileName: 'OptionGroupImportDialog.js',
      size: '7.5 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Label',
            calledAs: 'new Ext.form.Label',
            path: 'Ext.form.Label',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/PreviewHtmlDialog.js',
      name: 'PreviewHtmlDialog',
      fileName: 'PreviewHtmlDialog.js',
      size: '3.2 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/PrintOptionsDialog.js',
      name: 'PrintOptionsDialog',
      fileName: 'PrintOptionsDialog.js',
      size: '5.1 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ZorgTTPLoginDialog',
            calledAs: 'new ux.ZorgTTPLoginDialog',
            path: 'ux.ZorgTTPLoginDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/PrintPhaseOptionsDialog.js',
      name: 'PrintPhaseOptionsDialog',
      fileName: 'PrintPhaseOptionsDialog.js',
      size: '4.3 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ZorgTTPLoginDialog',
            calledAs: 'new ux.ZorgTTPLoginDialog',
            path: 'ux.ZorgTTPLoginDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/ReportStepDialog.js',
      name: 'ReportStepDialog',
      fileName: 'ReportStepDialog.js',
      size: '8.2 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SendCcrReportViaEmailDialog.js',
      name: 'SendCcrReportViaEmailDialog',
      fileName: 'SendCcrReportViaEmailDialog.js',
      size: '4.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SendMassSurveyInstanceDialog.js',
      name: 'SendMassSurveyInstanceDialog',
      fileName: 'SendMassSurveyInstanceDialog.js',
      size: '6.9 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'MarkDownDialog',
            calledAs: 'new ux.dialogs.MarkDownDialog',
            path: 'ux.dialogs.MarkDownDialog',
          },
          {
            name: 'PreviewHtmlDialog',
            calledAs: 'new ux.dialogs.PreviewHtmlDialog',
            path: 'ux.dialogs.PreviewHtmlDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SendSurveyInstanceDialog.js',
      name: 'SendSurveyInstanceDialog',
      fileName: 'SendSurveyInstanceDialog.js',
      size: '9.5 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'MarkDownDialog',
            calledAs: 'new ux.dialogs.MarkDownDialog',
            path: 'ux.dialogs.MarkDownDialog',
          },
          {
            name: 'PreviewHtmlDialog',
            calledAs: 'new ux.dialogs.PreviewHtmlDialog',
            path: 'ux.dialogs.PreviewHtmlDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.form.FormPanel',
            path: 'Ext.form.FormPanel',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/StepDialog.js',
      name: 'StepDialog',
      fileName: 'StepDialog.js',
      size: '7.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SurveyDialog.js',
      name: 'SurveyDialog',
      fileName: 'SurveyDialog.js',
      size: '11 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'MarkDownDialog',
            calledAs: 'new ux.dialogs.MarkDownDialog',
            path: 'ux.dialogs.MarkDownDialog',
          },
          {
            name: 'PreviewHtmlDialog',
            calledAs: 'new ux.dialogs.PreviewHtmlDialog',
            path: 'ux.dialogs.PreviewHtmlDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SurveyPackageDialog.js',
      name: 'SurveyPackageDialog',
      fileName: 'SurveyPackageDialog.js',
      size: '48 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'SurveyStore',
            calledAs: 'new ux.store.SurveyStore',
            path: 'ux.store.SurveyStore',
          },
          {
            name: 'ContactsStore',
            calledAs: 'new ux.store.ContactsStore',
            path: 'ux.store.ContactsStore',
          },
          {
            name: 'MarkDownDialog',
            calledAs: 'new ux.dialogs.MarkDownDialog',
            path: 'ux.dialogs.MarkDownDialog',
          },
          {
            name: 'PreviewHtmlDialog',
            calledAs: 'new ux.dialogs.PreviewHtmlDialog',
            path: 'ux.dialogs.PreviewHtmlDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'FieldSet',
            calledAs: 'new Ext.form.FieldSet',
            path: 'Ext.form.FieldSet',
          },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'BoxComponent',
            calledAs: 'new Ext.BoxComponent',
            path: 'Ext.BoxComponent',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SurveyScheduleManagement.js',
      name: 'SurveyScheduleManagement',
      fileName: 'SurveyScheduleManagement.js',
      size: '11 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'RowEditor',
            calledAs: 'new Ext.ux.grid.RowEditor',
            path: 'Ext.ux.grid.RowEditor',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/SurveyStepDialog.js',
      name: 'SurveyStepDialog',
      fileName: 'SurveyStepDialog.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/TermsAndConditionsDialog.js',
      name: 'TermsAndConditionsDialog',
      fileName: 'TermsAndConditionsDialog.js',
      size: '2.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/TermsOfUseNotAgreedDialog.js',
      name: 'TermsOfUseNotAgreedDialog',
      fileName: 'TermsOfUseNotAgreedDialog.js',
      size: '2.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/TermsOfUseUpdateDialog.js',
      name: 'TermsOfUseUpdateDialog',
      fileName: 'TermsOfUseUpdateDialog.js',
      size: '3.5 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/UserRightsDialog.js',
      name: 'UserRightsDialog',
      fileName: 'UserRightsDialog.js',
      size: '43 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'LongGridView',
            calledAs: 'new ux.grid.LongGridView',
            path: 'ux.grid.LongGridView',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'TabPanel',
            calledAs: 'new Ext.TabPanel',
            path: 'Ext.TabPanel',
          },
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'EditorGridPanel',
            calledAs: 'new Ext.grid.EditorGridPanel',
            path: 'Ext.grid.EditorGridPanel',
          },
          {
            name: 'Label',
            calledAs: 'new Ext.form.Label',
            path: 'Ext.form.Label',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/ZorgTTPLoginDialog.js',
      name: 'ZorgTTPLoginDialog',
      fileName: 'ZorgTTPLoginDialog.js',
      size: '3.4 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/dialogs/assignRoleToFormEntityDialog.js',
      name: 'assignRoleToFormEntityDialog',
      fileName: 'assignRoleToFormEntityDialog.js',
      size: '8.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'FormPanel',
            calledAs: 'new Ext.FormPanel',
            path: 'Ext.FormPanel',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'CheckboxGroup',
            calledAs: 'new Ext.form.CheckboxGroup',
            path: 'Ext.form.CheckboxGroup',
          },
          {
            name: 'DisplayField',
            calledAs: 'new Ext.form.DisplayField',
            path: 'Ext.form.DisplayField',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/CalculationField.js',
      name: 'CalculationField',
      fileName: 'CalculationField.js',
      size: '11 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/CastorField.js',
      name: 'CastorField',
      fileName: 'CastorField.js',
      size: '109 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'SourceDataVerificationConfirmationDialog',
            calledAs: 'new ux.dialogs.SourceDataVerificationConfirmationDialog',
            path: 'ux.dialogs.SourceDataVerificationConfirmationDialog',
          },
          {
            name: 'ConfirmChangesDialog',
            calledAs: 'new ux.ConfirmChangesDialog',
            path: 'ux.ConfirmChangesDialog',
          },
          {
            name: 'CommentsDialog',
            calledAs: 'new ux.dialogs.CommentsDialog',
            path: 'ux.dialogs.CommentsDialog',
          },
          {
            name: 'AuditTrailDialog',
            calledAs: 'new ux.dialogs.AuditTrailDialog',
            path: 'ux.dialogs.AuditTrailDialog',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          { name: 'menu', calledAs: 'new Ext.menu', path: 'Ext.menu' },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'DelayedTask(function',
            calledAs: 'new Ext.util.DelayedTask(function ',
            path: 'Ext.util.DelayedTask(function',
          },
          {
            name: 'Container(this',
            calledAs: 'new Ext.Container(this',
            path: 'Ext.Container(this',
          },
          {
            name: 'Window',
            calledAs: 'new Ext.Window',
            path: 'Ext.Window',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/CastorFieldSurvey.js',
      name: 'CastorFieldSurvey',
      fileName: 'CastorFieldSurvey.js',
      size: '32 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'menu', calledAs: 'new Ext.menu', path: 'Ext.menu' },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'Container(this',
            calledAs: 'new Ext.Container(this',
            path: 'Ext.Container(this',
          },
          {
            name: 'DelayedTask(',
            calledAs: 'new Ext.util.DelayedTask(',
            path: 'Ext.util.DelayedTask(',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/CastorSliderField.js',
      name: 'CastorSliderField',
      fileName: 'CastorSliderField.js',
      size: '5.8 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'DelayedTask(',
            calledAs: 'new Ext.util.DelayedTask(',
            path: 'Ext.util.DelayedTask(',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/DateField.js',
      name: 'DateField',
      fileName: 'DateField.js',
      size: '350 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/GeolocationField.js',
      name: 'GeolocationField',
      fileName: 'GeolocationField.js',
      size: '2.2 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/GridChildField.js',
      name: 'GridChildField',
      fileName: 'GridChildField.js',
      size: '26 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ConfirmChangesDialog',
            calledAs: 'new ux.ConfirmChangesDialog',
            path: 'ux.ConfirmChangesDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'Container(this',
            calledAs: 'new Ext.Container(this',
            path: 'Ext.Container(this',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/GridField.js',
      name: 'GridField',
      fileName: 'GridField.js',
      size: '48 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'ConfirmChangesDialog',
            calledAs: 'new ux.ConfirmChangesDialog',
            path: 'ux.ConfirmChangesDialog',
          },
          {
            name: 'SourceDataVerificationConfirmationDialog',
            calledAs: 'new ux.dialogs.SourceDataVerificationConfirmationDialog',
            path: 'ux.dialogs.SourceDataVerificationConfirmationDialog',
          },
          {
            name: 'CommentsDialog',
            calledAs: 'new ux.dialogs.CommentsDialog',
            path: 'ux.dialogs.CommentsDialog',
          },
          {
            name: 'AuditTrailDialog',
            calledAs: 'new ux.dialogs.AuditTrailDialog',
            path: 'ux.dialogs.AuditTrailDialog',
          },
        ],
        importedReactComponents: [
          {
            name: 'Modal',
            calledAs: 'new Castor.components.Modal',
            path: 'Castor.components.Modal',
          },
        ],
        defaultExtComponents: [
          { name: 'menu', calledAs: 'new Ext.menu', path: 'Ext.menu' },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'Container(this',
            calledAs: 'new Ext.Container(this',
            path: 'Ext.Container(this',
          },
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/GridFieldPreview.js',
      name: 'GridFieldPreview',
      fileName: 'GridFieldPreview.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Panel', calledAs: 'new Ext.Panel', path: 'Ext.Panel' },
          {
            name: 'Container',
            calledAs: 'new Ext.Container',
            path: 'Ext.Container',
          },
          {
            name: 'ArrayStore',
            calledAs: 'new Ext.data.ArrayStore',
            path: 'Ext.data.ArrayStore',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/ImageField.js',
      name: 'ImageField',
      fileName: 'ImageField.js',
      size: '158 bytes',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/LinkField.js',
      name: 'LinkField',
      fileName: 'LinkField.js',
      size: '6.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/QRCodeField.js',
      name: 'QRCodeField',
      fileName: 'QRCodeField.js',
      size: '6.1 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/RandomizationField.js',
      name: 'RandomizationField',
      fileName: 'RandomizationField.js',
      size: '2.0 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/ReportFieldGrid.js',
      name: 'ReportFieldGrid',
      fileName: 'ReportFieldGrid.js',
      size: '11 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
          {
            name: 'JsonStore',
            calledAs: 'new Ext.data.JsonStore',
            path: 'Ext.data.JsonStore',
          },
          {
            name: 'Menu',
            calledAs: 'new Ext.menu.Menu',
            path: 'Ext.menu.Menu',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/fields/SummaryField.js',
      name: 'SummaryField',
      fileName: 'SummaryField.js',
      size: '4.3 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/grid/LabCodePresetsGrid.js',
      name: 'LabCodePresetsGrid',
      fileName: 'LabCodePresetsGrid.js',
      size: '4.2 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'EpicLabCodesStore',
            calledAs: 'new ux.store.EpicLabCodesStore',
            path: 'ux.store.EpicLabCodesStore',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'Toolbar',
            calledAs: 'new Ext.Toolbar',
            path: 'Ext.Toolbar',
          },
          {
            name: 'JsonStore',
            calledAs: 'new Ext.data.JsonStore',
            path: 'Ext.data.JsonStore',
          },
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/grid/Roles.js',
      name: 'Roles',
      fileName: 'Roles.js',
      size: '10 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'RoleStore',
            calledAs: 'new ux.store.RoleStore',
            path: 'ux.store.RoleStore',
          },
          {
            name: 'LongGridView',
            calledAs: 'new ux.grid.LongGridView',
            path: 'ux.grid.LongGridView',
          },
          {
            name: 'AddRoleDialog',
            calledAs: 'new ux.dialogs.AddRoleDialog',
            path: 'ux.dialogs.AddRoleDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'ColumnModel',
            calledAs: 'new Ext.grid.ColumnModel',
            path: 'Ext.grid.ColumnModel',
          },
          {
            name: 'GridPanel',
            calledAs: 'new Ext.grid.GridPanel',
            path: 'Ext.grid.GridPanel',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/groupcombo.js',
      name: 'groupcombo',
      fileName: 'groupcombo.js',
      size: '3.0 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          { name: 'Layer', calledAs: 'new Ext.Layer', path: 'Ext.Layer' },
          {
            name: 'PagingToolbar',
            calledAs: 'new Ext.PagingToolbar',
            path: 'Ext.PagingToolbar',
          },
          {
            name: 'GroupDataView',
            calledAs: 'new Ext.ux.GroupDataView',
            path: 'Ext.ux.GroupDataView',
          },
          {
            name: 'Resizable(this',
            calledAs: 'new Ext.Resizable(this',
            path: 'Ext.Resizable(this',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/groupdataview.js',
      name: 'groupdataview',
      fileName: 'groupdataview.js',
      size: '4.6 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/panel/FieldDependencyPanel.js',
      name: 'FieldDependencyPanel',
      fileName: 'FieldDependencyPanel.js',
      size: '30 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
          {
            name: 'FieldSet',
            calledAs: 'new Ext.form.FieldSet',
            path: 'Ext.form.FieldSet',
          },
          {
            name: 'Store',
            calledAs: 'new Ext.data.Store',
            path: 'Ext.data.Store',
          },
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
          {
            name: 'ComboBox',
            calledAs: 'new Ext.form.ComboBox',
            path: 'Ext.form.ComboBox',
          },
          {
            name: 'TextField',
            calledAs: 'new Ext.form.TextField',
            path: 'Ext.form.TextField',
          },
          {
            name: 'SimpleStore',
            calledAs: 'new Ext.data.SimpleStore',
            path: 'Ext.data.SimpleStore',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/statistics/LineChart.js',
      name: 'LineChart',
      fileName: 'LineChart.js',
      size: '2.0 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/store/AutomationsStore.js',
      name: 'AutomationsStore',
      fileName: 'AutomationsStore.js',
      size: '1.1 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/store/EncryptableTypesStore.js',
      name: 'EncryptableTypesStore',
      fileName: 'EncryptableTypesStore.js',
      size: '1.0 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/store/EpicLabCodesStore.js',
      name: 'EpicLabCodesStore',
      fileName: 'EpicLabCodesStore.js',
      size: '1.3 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/store/NotificationConfigurationsStore.js',
      name: 'NotificationConfigurationsStore',
      fileName: 'NotificationConfigurationsStore.js',
      size: '1.4 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/store/PhaseStore.js',
      name: 'PhaseStore',
      fileName: 'PhaseStore.js',
      size: '1.5 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/store/ReportInstanceStore.js',
      name: 'ReportInstanceStore',
      fileName: 'ReportInstanceStore.js',
      size: '1.9 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'HttpProxy',
            calledAs: 'new Ext.data.HttpProxy',
            path: 'Ext.data.HttpProxy',
          },
          {
            name: 'JsonReader',
            calledAs: 'new Ext.data.JsonReader',
            path: 'Ext.data.JsonReader',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/js/ux/survey/SurveyStepNavigator.js',
      name: 'SurveyStepNavigator',
      fileName: 'SurveyStepNavigator.js',
      size: '13 KB',
      childComponents: {
        importedExtComponents: [],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'JsonStore',
            calledAs: 'new Ext.data.JsonStore',
            path: 'Ext.data.JsonStore',
          },
          {
            name: 'XTemplate',
            calledAs: 'new Ext.XTemplate',
            path: 'Ext.XTemplate',
          },
        ],
      },
    },
    {
      path: 'server/sys/castor/_mycrf/mycrf.js',
      name: 'mycrf',
      fileName: 'mycrf.js',
      size: '27 KB',
      childComponents: {
        importedExtComponents: [
          {
            name: 'show',
            calledAs: 'new ux.dialogs.KeyboardShortcutsDialog({}).show',
            path: 'ux.dialogs.KeyboardShortcutsDialog({}).show',
          },
          {
            name: 'AddInstituteDialog',
            calledAs: 'new ux.dialogs.AddInstituteDialog',
            path: 'ux.dialogs.AddInstituteDialog',
          },
          {
            name: 'CreateHelpdeskTicketDialog',
            calledAs: 'new ux.dialogs.CreateHelpdeskTicketDialog',
            path: 'ux.dialogs.CreateHelpdeskTicketDialog',
          },
        ],
        importedReactComponents: [],
        defaultExtComponents: [
          {
            name: 'DelayedTask',
            calledAs: 'new Ext.util.DelayedTask',
            path: 'Ext.util.DelayedTask',
          },
          {
            name: 'KeyMap',
            calledAs: 'new Ext.KeyMap',
            path: 'Ext.KeyMap',
          },
        ],
      },
    },
  ],
};

export default exampleOutput;
